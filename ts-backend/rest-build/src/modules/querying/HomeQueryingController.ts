import { Software } from "../../entity/Software";
import { Request, Response } from "express";

export const getRecentSoftwares = async (req: Request, res: Response) => {
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

export const defaultRouteAnswer = (req: Request, res: Response) => {
  res.send(
    `The route you're trying to access ${
    req.originalUrl
    } and the method you're trying to use ${req.method.toUpperCase()} is not available, created or is restricted.`
  );
};
