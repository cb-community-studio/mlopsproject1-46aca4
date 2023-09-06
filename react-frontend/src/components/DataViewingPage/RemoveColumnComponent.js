import React from "react";
import { MultiSelect } from 'primereact/multiselect';

const RemoveColumnComponent = ({ data, selectedColumnName, onChange }) => {
    const getColumnNames = () => {
        // Assuming data is an array of objects where each object represents a row
        // Get the keys (column names) of the first row as column names
        const firstRow = data[0];
        if (firstRow) {
            const columnNames = Object.keys(firstRow);
            // Exclude the "_id" column name
            return columnNames.filter(columnName => columnName !== "_id");
        } else {
            return []; // Handle the case where data is empty or doesn't contain any rows
        }
    };

    return (
        <MultiSelect
            value={selectedColumnName}
            options={getColumnNames().map(columnName => ({ label: columnName, value: columnName }))}
            onChange={(e) => onChange(e.value)}
            placeholder="Drop Column"
            display="chip"
        />
    );
};

export default RemoveColumnComponent;

