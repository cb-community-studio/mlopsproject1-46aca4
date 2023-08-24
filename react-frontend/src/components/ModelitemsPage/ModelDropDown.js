import React from "react";
import { Dropdown } from 'primereact/dropdown';

const ModelDropdown = ({ data, selectedColumnName, onChange }) => {
    const getRemainingColumnNames = () => {
        const columnNames = data.length > 0 ? Object.keys(data[0]) : [];
        return columnNames.slice(1);
    };

    return (
        <Dropdown
            value={selectedColumnName}
            options={getRemainingColumnNames().map(columnName => ({ label: columnName, value: columnName }))}
            onChange={(e) => onChange(e.value)}
            placeholder="Select the Target"
        />
    );
};

export default ModelDropdown;
