import React, {useEffect, useState} from 'react';
import {CarService} from "../../Service";
import Car from "../Car/Car";

const Cars = ({newCar, setCarUpdate, carUpdate}) => {
    const [cars, setCars] = useState([])
    const [deleteId, setDeleteId] = useState(null)

    useEffect(() => {
        CarService.getAll()
            .then(({data}) => setCars((data)))
    }, [newCar, deleteId, setCarUpdate])
    //useEffect(() => {
        //     if (newCar) {
        //         setCars(prevState => [...prevState, newCar])
        //     }
        //
        //     if (deletedCarId) {
        //         setCars(cars.filter(car => car.id !== deleteId))
        //     }
        // }, [newCar, deleteId])
        useEffect(() => {
                 if (carUpdate) {
                     const car = cars.find(car => car.id === carUpdate.id);
                     Object.assign(car, carUpdate)
                     setCars([...cars])
                 }
             }, [carUpdate])
    return <div>
        {cars.map((car) => <Car key={car.id} car={car} setCarUpdate={setCarUpdate} setDeleteId={setDeleteId}/>)}
    </div>;
};

export default Cars;