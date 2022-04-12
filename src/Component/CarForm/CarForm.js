import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {CarService} from "../../Service";
import {Validator} from "../../Validator/Validator";
import {joiResolver} from "@hookform/resolvers/joi";

const CarForm = ({setNewCar, carUpdate, setCarUpdate, setCarPull}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(Validator),
        mode: "onTouched"
    });
    useEffect(() => {
        if (carUpdate) {
            const {model, price, year} = carUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carUpdate])
    const Submit = async (car) => {
        try {
            if (carUpdate) {
                const data = await CarService.updateById(carUpdate.id, car)
                setNewCar(data)
                setCarPull(false)
            } else {
                await CarService.create(car)
                    .then(({data}) => setNewCar((data)))
                reset()
            }
        } catch (e) {
        }
    }
    const clearForm = () => {
        setCarPull(false);
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(Submit)}>
                <div><label>Model: <input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <br/>
                <button disabled={!isValid}>{setCarPull ? 'Update' : 'Create'}</button>
                //неактивная кнопки, если в форму данные на записаны
                {
                    !!carUpdate && <button onClick={clearForm}>clear form</button> //очищает форму
                }

            </form>
        </div>
    );
};

export default CarForm;