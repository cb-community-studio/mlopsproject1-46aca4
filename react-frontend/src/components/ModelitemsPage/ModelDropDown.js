import React from "react";
import { Dropdown } from 'primereact/dropdown';

const ModelDropdown = ({ data, selectedColumnName, onChange }) => {
    const getModelColumnValues = () => {
        const modelValues = data.map(item => item.Model);
        return [...new Set(modelValues)]; // Get unique values
    };

    return (
        <Dropdown
            value={selectedColumnName}
            options={getModelColumnValues().map(value => ({ label: value, value: value }))}
            onChange={(e) => onChange(e.value)}
            placeholder="Select the Target"
        />
    );
};

export default ModelDropdown;
