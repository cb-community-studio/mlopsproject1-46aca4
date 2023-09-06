import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';


const DataViewingTable = ({ items, onRowClick }) => {
    const pTemplate0 = (rowData) => <p >{rowData.Number_of_times_pregnant}</p>
    const pTemplate1 = (rowData) => <p >{rowData.Plasma_glucose_concentration}</p>
    const pTemplate2 = (rowData) => <p >{rowData.Diastoli_blood_pressure}</p>
    const pTemplate3 = (rowData) => <p >{rowData.Triceps_skin_fold_thickness}</p>
    const pTemplate4 = (rowData) => <p >{rowData.Hour2_serum_insulin}</p>
    const pTemplate5 = (rowData) => <p >{rowData.Body_mass_index}</p>
    const pTemplate6 = (rowData) => <p >{rowData.Diabetes_pedigree_function}</p>
    const pTemplate7 = (rowData) => <p >{rowData.Age}</p>
    const pTemplate8 = (rowData) => <p >{rowData.Class_variable}</p>

    return (
        <div>
            <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={20}>
                <Column field="Number_of_times_pregnant" header="Num_of_pregnant" body={pTemplate0} style={{ minWidth: "10rem" }} />
                <Column field="Plasma_glucose_concentration" header="Plasma_glu_concent" body={pTemplate1} style={{ minWidth: "10rem" }} />
                <Column field="Diastoli_blood_pressure" header="blood_pressure" body={pTemplate2} style={{ minWidth: "10rem" }} />
                <Column field="Triceps_skin_fold_thickness" header="Tricep_skin_thick" body={pTemplate3} style={{ minWidth: "10rem" }} />
                <Column field="Hour2_serum_insulin" header="serum_insulin" body={pTemplate4} style={{ minWidth: "10rem" }} />
                <Column field="Body_mass_index" header="BMI" body={pTemplate5} style={{ minWidth: "5rem" }} />
                <Column field="Diabetes_pedigree_function" header="Diabetes_pedig" body={pTemplate6} style={{ minWidth: "10rem" }} />
                <Column field="Age" header="Age" body={pTemplate7} style={{ minWidth: "5rem" }} />
                <Column field="Class_variable" header="Class_variable" body={pTemplate8} style={{ minWidth: "10rem" }} />
            </DataTable>
        </div>
    );
};

export default DataViewingTable;
