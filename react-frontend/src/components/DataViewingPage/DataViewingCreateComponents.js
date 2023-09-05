
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const DataViewingCreateComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            Number_of_times_pregnant: _entity.Number_of_times_pregnant,
            Plasma_glucose_concentration: _entity.Plasma_glucose_concentration,
            Diastoli_blood_pressure: _entity.Diastoli_blood_pressure,
            Triceps_skin_fold_thickness: _entity.Triceps_skin_fold_thickness,
            Hour2_serum_insulin: _entity.Hour2_serum_insulin,
            Body_mass_index: _entity.Body_mass_index,
            Diabetes_pedigree_function: _entity.Diabetes_pedigree_function,
            Age: _entity.Age,
            Class_variable: _entity.Class_variable

        };

        setLoading(true);
        try {
            const result = await client.service("diabetes").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="dataview-create-dialog-component">
                <div>
                    <p className="m-0" >Number of times pregnant:</p>
                    <InputText className="w-full mb-3" value={_entity?.Number_of_times_pregnant} onChange={(e) => setValByKey("Number_of_times_pregnant", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Plasma glucose concentration:</p>
                    <InputText className="w-full mb-3" value={_entity?.Plasma_glucose_concentration} onChange={(e) => setValByKey("Plasma_glucose_concentration", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Diastoli blood pressure:</p>
                    <InputText className="w-full mb-3" value={_entity?.Diastoli_blood_pressure} onChange={(e) => setValByKey("Diastoli_blood_pressure", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Triceps skin fold thickness:</p>
                    <InputText className="w-full mb-3" value={_entity?.Triceps_skin_fold_thickness} onChange={(e) => setValByKey("Triceps_skin_fold_thickness", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Hour2 serum insulin:</p>
                    <InputText className="w-full mb-3" value={_entity?.Hour2_serum_insulin} onChange={(e) => setValByKey("Hour2_serum_insulin", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Body mass index:</p>
                    <InputText className="w-full mb-3" value={_entity?.Body_mass_index} onChange={(e) => setValByKey("Body_mass_index", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Diabetes pedigree function:</p>
                    <InputText className="w-full mb-3" value={_entity?.Diabetes_pedigree_function} onChange={(e) => setValByKey("Diabetes_pedigree_function", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Age:</p>
                    <InputText className="w-full mb-3" value={_entity?.Age} onChange={(e) => setValByKey("Age", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Class variable:</p>
                    <InputText className="w-full mb-3" value={_entity?.Class_variable} onChange={(e) => setValByKey("Class_variable", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(DataViewingCreateComponent);
// createDialog_code.template
