import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import LineGraph from '../Mlops/FeatureEng';

const ModelitemsDataTable = ({ items, onRowClick }) => {
    const highlightClass = "highlight";
    const highlightBackgroundColor = "yellow"; // Change this to the desired highlight color

    // Find the highest value in a specific column
    const getHighestValueInColumn = (columnName) => {
        const numericValues = items.map(item => parseFloat(item[columnName]));
        return Math.max(...numericValues);
    };

    // Function to conditionally apply the background highlight
    const createHighlightTemplate = (columnName) => (rowData, { rowIndex }) => {
        const highestValue = getHighestValueInColumn(columnName);
        const numericValue = parseFloat(rowData[columnName]);
        const shouldHighlight = !isNaN(numericValue) && numericValue === highestValue;

        return (
            <p
                className={shouldHighlight ? `${highlightClass}` : ""}
                style={{
                    backgroundColor: shouldHighlight ? highlightBackgroundColor : "transparent",
                }}
            >
                {rowData[columnName]}
            </p>
        );
    };

    // Create data for the Chart component
    const lineGraphData = {
        labels: items.map(item => item.Model), // Assuming Model column provides labels
        datasets: [
            {
                label: 'Accuracy',
                borderColor: 'blue',
                fill: false,
                data: items.map(item => parseFloat(item.Accuracy)),
            },
            {
                label: 'Precision',
                borderColor: 'orange',
                fill: false,
                data: items.map(item => parseFloat(item.Prec)),
            },
            {
                label: 'Recall',
                borderColor: 'red',
                fill: false,
                data: items.map(item => parseFloat(item.Recall)),
            },
            {
                label: 'F1',
                borderColor: 'black',
                fill: false,
                data: items.map(item => parseFloat(item.F1)),
            },
        ],
    };

    return (
        <div>
            <LineGraph data={lineGraphData} />
            <hr></hr>
            <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={20}>
                <Column field="Model" header="Model" body={createHighlightTemplate("Model")} style={{ minWidth: "10rem" }} />
                <Column field="Accuracy" header="Accuracy" body={createHighlightTemplate("Accuracy")} style={{ minWidth: "10rem" }} />
                <Column field="AUC" header="AUC Score" body={createHighlightTemplate("AUC")} style={{ minWidth: "10rem" }} />
                <Column field="Recall" header="Recall" body={createHighlightTemplate("Recall")} style={{ minWidth: "10rem" }} />
                <Column field="Prec" header="Precision" body={createHighlightTemplate("Prec")} style={{ minWidth: "10rem" }} />
                <Column field="F1" header="F1" body={createHighlightTemplate("F1")} style={{ minWidth: "10rem" }} />
                <Column field="Kappa" header="Kappa" body={createHighlightTemplate("Kappa")} style={{ minWidth: "10rem" }} />
                <Column field="MCC" header="MCC" body={createHighlightTemplate("MCC")} style={{ minWidth: "10rem" }} />
                <Column field="TTvalue" header="TT (Sec)" body={createHighlightTemplate("TTSec")} style={{ minWidth: "10rem" }} />
            </DataTable>
        </div>
    );
};

export default ModelitemsDataTable;
