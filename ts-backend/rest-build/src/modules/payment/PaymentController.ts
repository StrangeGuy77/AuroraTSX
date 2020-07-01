import { Request, Response } from "express";
import { Payment } from "../../entity/Payment";
import { User } from "../../entity/User";
import { getRepository } from "typeorm";

/**
 *
 * @description Get all the payments from the server. It can be queried with three params. username or userId and quantity for both.
 * @param req Automatically injected by Express
 * @param res Automatically injected by Express
 */

export const RegisterPayment = async (req: Request, res: Response) => {
  // Validar si la petición carece de query params.
  if (!req.query) {
    return res.json({
      message:
        "You must set the query to have a valid payment. The query must have this structure: ../payment?userId= or ../payment?username=",
    });
  } else {
    let UserEntity: any;
    // Verificar si la estructura busca por nombre de usuario.
    if (req.query.username) {
      const { username } = req.query;
      try {
        // Buscar al usuario.
        UserEntity = await User.findOne({
          where: {
            username,
          },
        });
        if (!UserEntity) {
          // El usuario buscado mediante username no existe.
          return res.json({
            message:
              "The user you're trying to associate this payment with, doesnt exist. Check the username you sent.",
          });
        }
      } catch (error) {
        // Error en la petición.
        return res.json({
          message: "There was a problem while searching for a valid user.",
          error,
        });
      }
      // Buscar al usuario por id.
    } else if (req.query.userId) {
      const { userId } = req.query;
      try {
        UserEntity = await User.findOne({
          where: {
            id: userId,
          },
        });
        if (!UserEntity) {
          // El usuario no existe.
          return res.json({
            message:
              "The user you're trying to associate this payment with, doesnt exist. Check the username you sent.",
          });
        }
      } catch (error) {
        return res.json({
          message: "There was a problem while searching for a valid user.",
          error,
        });
      }
    }
    // Estructurar la entidad del pago
    const newPayment = new Payment();
    newPayment.user = UserEntity;
    newPayment.paymentMethod = req.body;

    try {
      // Guardar el pago
      await getRepository(Payment).save(newPayment);
      return res.json({
        message: "Payment succesfully saved.",
      });
    } catch (error) {
      // Error al guardar el pago
      return res.json({
        message: "There was a problem while trying to save the payment.",
        error,
      });
    }
  }
};

/**
 * @description Get all the payments from the server. It can be queried with three params. username or userId and quantity for both.
 * @param req Automatically injected by Express
 * @param res Automatically injected by Express
 */
export const getPayments = async (req: Request, res: Response) => {
  if (!req.query) {
    try {
      const AllPayments = await Payment.find();
      if (AllPayments) {
        return res.json({
          message: "There are no payments available at the moment.",
        });
      } else {
        return res.json({
          AllPayments,
        });
      }
    } catch (error) {
      return res.json({
        message: "There was a problem while searching for all payments.",
        error,
      });
    }
  } else if (req.query.username) {
    const { username } = req.query;
    if (req.query.quantity) {
      const { quantity } = req.query;
      try {
        const PaymentsByUsername = await Payment.find({
          where: {
            user: {
              username,
            },
            skip: quantity,
          },
        });
        if (PaymentsByUsername) {
          return res.json({
            PaymentsByUsername,
          });
        } else {
          return res.json({
            message: `${username} doesn't have any payments available right now. `,
          });
        }
      } catch (error) {
        return res.json({
          message:
            "There was a problem while searching for payments by username",
          error,
        });
      }
    }
  } else if (req.query.userId) {
    const { userId } = req.query;
    let PaymentsByUserID: any;
    if (req.query.quantity) {
      const { quantity } = req.query;
      try {
        PaymentsByUserID = await Payment.find({
          where: {
            user: {
              id: userId,
            },
            skip: quantity,
          },
        });
        if (PaymentsByUserID) {
          return res.json({
            PaymentsByUserID,
          });
        } else {
          return res.json({
            message: `The user with ID ${userId} doesn't have any payments available right now. `,
          });
        }
      } catch (error) {
        return res.json({
          message:
            "There was a problem while searching for payments by UserID with quantity",
          error,
        });
      }
    } else {
      try {
        PaymentsByUserID = await Payment.find({
          where: {
            user: {
              id: userId,
            },
          },
        });
      } catch (error) {
        return res.json({
          message:
            "There was a problem while searching for payments by UserID without quantity.",
        });
      }
    }
  }
};
