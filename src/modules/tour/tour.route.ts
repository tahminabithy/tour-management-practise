import { Router } from "express";
import { tourController } from "./tour.controller";

export const routerTour = Router();

routerTour.post('/tour', tourController.createTour)

routerTour.post('/tour', tourController.getTours)