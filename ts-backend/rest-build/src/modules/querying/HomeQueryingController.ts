import { Software } from "../../entity/Software";
import { Request, Response } from "express";
import { User } from "../../entity/User";

export const getRecentSoftwares = async (_: Request, res: Response) => {
  try
  {
    const data = await Software.find({
      order: {
        createdAt: "ASC"
      }

    });
    res.json({
      message: "Succesful",
      data
    });
  } catch (error)
  {
    res.json({
      message: "There was an error retrieving recent softwares",
      error
    });
  }
};

export const getOneSoftware = async (req: Request, res: Response) => {
  const softId = req.params.softId;
  if (!softId)
  {
    res.json({
      message: "There's no softId in the params. Try /softwares/:softId"
    });
  } else
  {
    try
    {
      const softwareExist = await Software.findOne({
        where: {
          id: softId
        }
      });
      if (!softwareExist)
      {
        res.json({
          message: "The software you're trying to retrieve doesn't exist."
        });
      } else
      {
        res.json({
          message: 'Succesfully retrieved',
          data: softwareExist
        });
      }
    } catch (error)
    {
      res.json({
        message: "There was an error retrieving the software from the database"
      });
    }
  }
};

export const deleteASoftware = async (req: Request, res: Response) => {
  const softId = req.params.softId;
  if (!softId)
  {
    res.json({
      message: "There's no softId in the params. Try /softwares/:softId"
    });
  } else
  {
    try
    {
      const softwareExist = await Software.findOne({
        where: {
          id: softId
        }
      });
      if (!softwareExist)
      {
        res.json({
          message: "The software you're trying to delete doesn't exist."
        });
      } else
      {
        res.json({
          message: 'The software was succesfully deleted from the database'
        });
      }
    } catch (error)
    {
      res.json({
        message: "There was an error while trying to delete the software",
        error
      });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  if (!req.query)
  {
    res.json({
      message: "To find a user you must send either his Id or his username through the query param. ?userId= || ?username="
    });
  } else
  {
    if (req.query.userId)
    {
      const { userId } = req.query;
      const uuidRegex = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
      if (uuidRegex.test(userId))
      {
        try
        {
          const userExist = await User.findOne({
            where: {
              id: userId
            }
          });
          if (userExist)
          {
            userExist.password = "";
            res.json({
              message: "Success",
              code: 200,
              user: userExist
            });
          } else
          {
            res.json({
              message: "The user you're trying to search doesn't exist."
            });
          }
        } catch (error)
        {
          res.json({
            message: "There was an error while searching for the user.",
            error
          });
        }
      } else
      {
        res.json({
          message: "The ID you've sent doesnt match the UUID pattern. Check it out."
        });
      }
    } else if (req.query.username)
    {
      const { username } = req.query;
      if (username !== "")
      {
        try
        {
          const userExist = await User.findOne({
            where: {
              username
            }
          });
          if (userExist)
          {
            userExist.password = "";
            res.json({
              message: "Success",
              code: 200,
              user: userExist
            });
          } else
          {
            res.json({
              message: "The user you're trying to search doesn't exist."
            });
          }
        } catch (error)
        {
          res.json({
            message: "There was an error while searching for the user.",
            error
          });
        }
      } else
      {
        res.json({
          message: "The username you've sent is empty"
        });
      }
    } else
    {
      res.json({
        message: "To find a user you must send either his Id or his username through the query param. ?userId= || ?username="
      });
    }
  }
};

export const defaultRouteAnswer = (req: Request, res: Response) => {
  res.send(
    `The route you're trying to access ${
    req.originalUrl
    } and the method you're trying to use ${req.method.toUpperCase()} is not available, created or is restricted.`
  );
};
