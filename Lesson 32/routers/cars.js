import { Router } from "express"
import { getAllCarsService, getCarById, getCarsByRentType,getCarsByRentTypeAndId } from "../services/cars.js"

export const carsRoutes = new Router()

carsRoutes.get("/",getAllCarsService)
carsRoutes.get('/type/:rentType',getCarsByRentType)
carsRoutes.get('/type/:rentType/:_id',getCarsByRentTypeAndId)
carsRoutes.get("/:id",getCarById)