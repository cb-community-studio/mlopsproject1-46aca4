import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import _ from "lodash";
import DataViewingCreateComponents from "./DataViewingCreateComponents"; 
import DataViewingTable from "./DataViewingTable";
import RemoveColumnComponent from "./RemoveColumnComponent";

const DataViewPage = (props) => {
    const [data, setData] = useState([]);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    const [selectedColumnName, setSelectedColumnName] = useState(""); // State for selected column name

    useEffect(() => {
        //on mount
        client
            .service("diabetes")
            .find({ query: { $limit: 1500 } })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "diabetes", type: "error", message: error.message || "Failed get modelitems" });
            });
    }, []);

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };

    const deleteRow = async () => {
        try {
            await client.service("diabetes").remove(data[selectedEntityIndex]?._id);
            let _newData = data.filter((_, i) => i !== selectedEntityIndex);
            setData(_newData);
            setSelectedEntityIndex(null);
        } catch (error) {
            console.log({ error });
            props.alert({ title: "diabetes", type: "error", message: error.message || "Failed delete record" });
        }
    };

    const onRowClick = (e) => { };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="col flex justify-content">
                    <RemoveColumnComponent
                        data={data} // Pass the data prop
                        selectedColumnName={selectedColumnName}
                        onChange={setSelectedColumnName}
                    />
                </div>
            </div>
            <div className="grid col-10">
                <div className="col-12" role="diabetes-datatable">
                    <DataViewingTable items={data} onRowClick={onRowClick} />
                </div>
            </div>
            <DataViewingCreateComponents  show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(DataViewPage);
