
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ModelitemsDataTable = ({items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.modelName}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.accuracy}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.auc}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.recall}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.prec}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.f1Score}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.kappa}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.mcc}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.TTvalue}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="modelName" header="Model " body={pTemplate0} style={{ minWidth: "10rem" }} />
            <Column field="accuracy" header="Accuracy" body={pTemplate1} style={{ minWidth: "10rem" }} />
            <Column field="auc" header="AUC Score" body={pTemplate2} style={{ minWidth: "10rem" }} />
            <Column field="recall" header="Recall" body={pTemplate3} style={{ minWidth: "10rem" }} />
            <Column field="prec" header="Precision" body={pTemplate4} style={{ minWidth: "10rem" }} />
            <Column field="f1Score" header="F1" body={pTemplate5} style={{ minWidth: "10rem" }} />
            <Column field="kappa" header="Kappa" body={pTemplate6} style={{ minWidth: "10rem" }} />
            <Column field="mcc" header="MCC" body={pTemplate7} style={{ minWidth: "10rem" }} />
            <Column field="TTvalue" header="TT (Sec)" body={pTemplate8} style={{ minWidth: "10rem" }} />
        
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        
        </DataTable>
    );
};

export default ModelitemsDataTable;