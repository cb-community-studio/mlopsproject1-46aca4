
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

const ModelitemsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            modelName: _entity.modelName,
            accuracy: _entity.accuracy,
            auc: _entity.auc,
            recall: _entity.recall,
            prec: _entity.prec,
            f1Score: _entity.f1Score,
            kappa: _entity.kappa,
            mcc: _entity.mcc,
            TTvalue: _entity.TTvalue

        };

        setLoading(true);
        try {
            const result = await client.service("modelitems").create(_data);
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
            <div role="modelitems-create-dialog-component">
                <div>
                    <p className="m-0" >Model :</p>
                    <InputText className="w-full mb-3" value={_entity?.modelName} onChange={(e) => setValByKey("modelName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Accuracy:</p>
                    <InputText className="w-full mb-3" value={_entity?.accuracy} onChange={(e) => setValByKey("accuracy", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >AUC Score:</p>
                    <InputText className="w-full mb-3" value={_entity?.auc} onChange={(e) => setValByKey("auc", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Recall:</p>
                    <InputText className="w-full mb-3" value={_entity?.recall} onChange={(e) => setValByKey("recall", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Precision:</p>
                    <InputText className="w-full mb-3" value={_entity?.prec} onChange={(e) => setValByKey("prec", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >F1:</p>
                    <InputText className="w-full mb-3" value={_entity?.f1Score} onChange={(e) => setValByKey("f1Score", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Kappa:</p>
                    <InputText className="w-full mb-3" value={_entity?.kappa} onChange={(e) => setValByKey("kappa", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >MCC:</p>
                    <InputText className="w-full mb-3" value={_entity?.mcc} onChange={(e) => setValByKey("mcc", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >TT (Sec):</p>
                    <InputText className="w-full mb-3" value={_entity?.TTvalue} onChange={(e) => setValByKey("TTvalue", e.target.value)}  />
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

export default connect(null, mapDispatch)(ModelitemsCreateDialogComponent);
// createDialog_code.template
