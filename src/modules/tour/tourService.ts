import { Ttour } from "./tour.interface";
import { tourModel } from "./tour.model"

const createTourInDb = async (value:Ttour) => {
    const result = await tourModel.create(value);
    return result;
}
const getToursInDb = async()=>{
    const result = await tourModel.find();
    return result;
}
export const tourServices = {
    createTourInDb,
    getToursInDb
}