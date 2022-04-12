import React from 'react';
import {CarService} from "../../Service";

const Car = ({car, setCarUpdate, setDeleteId}) => {
    const {id, model, price, year} = car
    const deleteCar = async () => {
        try{
            if(deleteCar){
                await CarService.deleteById(id)
                setDeleteId(id)
        }
        }catch (e){

        }


    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={() => setCarUpdate(car)}>Update</button>
        </div>
    );
};

export default Car;