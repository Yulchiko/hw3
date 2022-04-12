import {axiosService} from "./axiosService";
import {urls} from "../Config/Urls";

export  const CarService={
    getAll:()=> axiosService.get(urls.cars),
    create:(car)=> axiosService.post(urls.cars, car),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`),
    getById:(id)=> axiosService.get(`${urls.cars}/${id}`),
    updateById:(id, newCar)=> axiosService.put(`${urls.cars}/${id}`, newCar)
}