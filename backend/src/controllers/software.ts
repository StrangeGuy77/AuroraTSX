import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { randomName } from "../helpers/libs";
import SoftwareSchema, { iSoft } from "../models/software";
import fs from "fs-extra";
import path from "path";

export async function getSoftwares(req: Request, res: Response): Promise<void> {
  const Softwares: Document[] = await SoftwareSchema.find();
  if (!(Softwares.length === 0)) {
    res.status(200).json({
      response: Softwares
    });
  } else {
    res.status(404).json({
      response: "There are no softwares available at the moment."
    });
  }
}

export async function getSoftware(req: Request, res: Response): Promise<void> {
  const _id: any = req.params.software_id;
  const Software: Document | any = await SoftwareSchema.findById(_id);
  if (Software) {
    res.status(200).json({
      response: Software
    });
  } else {
    res.status(404).json({
      response: "The software you are trying to search doesn't exist."
    });
  }
}

export async function createSoftware(
  req: Request,
  res: Response
): Promise<void> {
  let url: string;
  let result: any;
  do {
    url = randomName(6);
    result = await SoftwareSchema.findOne({ filename: url });
  } while (result);
  // Linking the path where to save the software preview image && resolving extensions

  // const imageTempPath = req.file.path;
  // const ext = path.extname(req.file.originalname).toLowerCase();
  // const targetPath = path.resolve(`src/server/upload/images/software/${req.body.title}/${url}${ext}`);

  // Therefore filesystem can rename images with their final name within db
  // await fs.rename(imageTempPath, targetPath);

  const newSoftware: iSoft = new SoftwareSchema(req.body);
  newSoftware.filename; // Remember to delete comments for images.
  await newSoftware.save().catch(async (err: Error) => {
    res.status(401).json({
      response: "There was a problem saving the new software.",
      reason: err
    });
    // await fs.unlink(imageTempPath);
  });

  res
    .status(200)
    .json({ response: "Software saved succesfully", data: newSoftware });
}

export async function updateSoftware(
  req: Request,
  res: Response
): Promise<void> {
  const _id: string = req.params.software_id;
  const softwareUpdate: {} = req.body;
  const updateInfo = await SoftwareSchema.findByIdAndUpdate(
    _id,
    softwareUpdate
  ).catch((err: Error) => {
    res
      .status(400)
      .json({
        response: "There was an error updating the software",
        reason: err
      })
      .sendStatus(400);
  });

  res.status(200).json({
    response: "Software updated succesfully",
    body: updateInfo
  });
}

export async function deleteSoftware(
  req: Request,
  res: Response
): Promise<void> {
  const _id: string = req.params.software_id;
  const soft = await SoftwareSchema.findById(_id);

  if (soft) {
    await fs.unlink(
      path.resolve(`./src/server/upload/images/software${soft.filename}`)
    );
    const deleteInfo = await soft.remove().catch((err: Error) => {
      res.status(400).json({
        response: "There was an error deleting the software",
        reason: err
      });
    });
    // console.log(typeof deleteInfo)
    res.status(200).json({
      response: "Software deleted succesfully",
      furtherInfo: deleteInfo
    });
  } else {
    res.status(404).json({
      response: "Software doesnt exist."
    });
  }
}

export async function buySoftware(req: Request, res: Response): Promise<void> {}

export async function likeSoftware(
  req: Request,
  res: Response
): Promise<void> {}

export async function commentSoftware(
  req: Request,
  res: Response
): Promise<void> {}
