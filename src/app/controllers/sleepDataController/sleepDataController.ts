import { Request, Response } from "express";
import { sleepDataModel } from "../../models/SleepData";
import { SleepDataService } from "../../services/sleepDataService";

export const sleepDataController = {
  create: async (req: Request, res: Response) => {
    try {
      SleepDataService.create(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      SleepDataService.update(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      SleepDataService.getAll(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  getOne: async (req: Request, res: Response) => {
    try {
      SleepDataService.getOne(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      SleepDataService.delete(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  getGrouped: async (req: Request, res: Response) => {
    try {
      SleepDataService.getGrouped(req, res);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

export default sleepDataController;
