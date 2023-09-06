import { Request, Response } from "express";
import { InputData, timeToDecimal, transformData } from "../utils/utilsGlobal";
import mongoose from "mongoose";
import { sleepDataModel } from "../models/SleepData";

export const SleepDataService = {
  getAll: async (req: Request, res: Response) => {
    const sleepDatas = await sleepDataModel.find();
    return res.status(200).json(sleepDatas);
  },
  getOne: async (req: Request, res: Response) => {
    const sleepDataId = req.params.id;
    const sleepData = await sleepDataModel.findById(sleepDataId);

    if (!sleepData) {
      return res.status(404).json({ error: "SleepData not found" });
    }

    res.status(200).json(sleepData);
  },
  create: async (req: Request, res: Response) => {
    const sleepTimeDecimal = timeToDecimal(req.body.sleepTime);
    const date = req.body.date;
    const name = req.body.name;

    const existingSleepData = await sleepDataModel.findOneAndUpdate(
      { date: date, name: name },
      { $inc: { sleepTime: sleepTimeDecimal } }, 
      { new: true, upsert: true }
    );

    if (existingSleepData) {
      res.status(200).json(existingSleepData); 
    } else {
      
      const sleepData = {
        _id: new mongoose.Types.ObjectId(),
        sleepTime: sleepTimeDecimal,
        date: date,
        name: name,
      };
      const newSleepData = await sleepDataModel.create(sleepData);
      res.status(201).json(newSleepData); 
    }
  },
  update: async (req: Request, res: Response) => {
    const sleepDataId = req.params.id;

    const sleepDataFind = await sleepDataModel.findById(sleepDataId);

    if (!sleepDataFind) {
      return res.status(404).json({ error: "SleepData not found" });
    }

    const sleepData = {
      sleepTime: timeToDecimal(req.body.sleepTime) || sleepDataFind.sleepTime,
      date: req.body.date || sleepDataFind.date,
      name: req.body.name || sleepDataFind.name,
    };
    const updatedSleepData = await sleepDataModel.findByIdAndUpdate(
      sleepDataId,
      sleepData,
      {
        new: true,
      }
    );

    res.status(200).json(updatedSleepData);
  },
  delete: async (req: Request, res: Response) => {
    const sleepDataId = req.params.id;
    const sleepDataToDelete = await sleepDataModel.findById(sleepDataId);

    if (!sleepDataToDelete) {
      return res.status(404).json({ error: "SleepData not found" });
    }

    await sleepDataToDelete.deleteOne();
    res.status(204).json();
  },
  getGrouped: async (req: Request, res: Response) => {
    const sleepDatas = await sleepDataModel.find();
    if (sleepDatas) {
      const formatedData: InputData[] = sleepDatas.map((item) => {
        return {
          date: item.date,
          sleepTime: item.sleepTime,
          name: item.name ?? "",
        };
      });

      const transformedData = transformData(formatedData);

      return res.status(200).json(transformedData);
    }
    return res.status(404).json({ error: "SleepData not found" });
  },
};
