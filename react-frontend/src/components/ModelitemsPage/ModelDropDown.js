import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Model, model } from "mongoose";

const ModelDropDown = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [Model];

    return (
        <div className="col-10 flex justify-content-end">
            <span className="p-float-label">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
                <label htmlFor="dd-city">Target Variable</label>
            </span>
        </div>
    );
};

export default ModelDropDown;