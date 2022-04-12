import './App.css';
import CarForm from "./Component/CarForm/CarForm";
import Cars from "./Component/Cars/Cars";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] = useState(null)
    const [carUpdate, setCarUpdate] = useState(null)
    const [carPull, setCarPull] = useState(null)

    return (
        <div className="App">
            <CarForm setNewCar={setNewCar} carUpdate={carUpdate} setCarPull={setCarPull}/>
            <hr/>
            <Cars newCar={newCar} setCarUpdate={setCarUpdate} carPull={carPull}/>

        </div>
    );
}

export default App;
