import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';


const ModelitemsDataTable = ({items, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.Model}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.Accuracy}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.AUC}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.Recall}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.Prec}</p>   //Error
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.F1}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.Kappa}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.MCC}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.TTSec}</p> // issue

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="Model" header="Model " body={pTemplate0} style={{ minWidth: "10rem" }} />
            <Column field="Accuracy" header="Accuracy" body={pTemplate1} style={{ minWidth: "10rem" }} />
            <Column field="AUC Score" header="AUC Score" body={pTemplate2} style={{ minWidth: "10rem" }} />
            <Column field="Recall" header="Recall" body={pTemplate3} style={{ minWidth: "10rem" }} />
            <Column field="Prec" header="Precision" body={pTemplate4} style={{ minWidth: "10rem" }} />
            <Column field="f1" header="F1" body={pTemplate5} style={{ minWidth: "10rem" }} />
            <Column field="kappa" header="Kappa" body={pTemplate6} style={{ minWidth: "10rem" }} />
            <Column field="mcc" header="MCC" body={pTemplate7} style={{ minWidth: "10rem" }} />
            <Column field="TTvalue" header="TT (Sec)" body={pTemplate8} style={{ minWidth: "10rem" }} />
        
        
        </DataTable>
    );
};

export default ModelitemsDataTable;