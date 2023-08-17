import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

const ModelDropDown = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'X1', code: 'NY' },
        { name: 'X2', code: 'RM' },
        { name: 'X3', code: 'LDN' },
        { name: 'X4', code: 'IST' },
        { name: 'X5', code: 'PRS' }
    ];

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