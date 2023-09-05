import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import _ from "lodash";
import { SplitButton } from "primereact/splitbutton";
import AreYouSureDialog from "../common/AreYouSureDialog";
// import ModelitemsEditDialogComponent from "./ModelitemsEditDialogComponent";
import DataViewingCreateComponents from "./DataViewingCreateComponents"; 
// import ModelitemsFakerDialogComponent from "./ModelitemsFakerDialogComponent";
// import ModelitemsSeederDialogComponent from "./ModelitemsSeederDialogComponent";
import DataViewingTable from "./DataViewingTable";

const DataViewPage = (props) => {
    const [data, setData] = useState([]);
    const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showFakerDialog, setShowFakerDialog] = useState(false);
    const [showSeederDialog, setShowSeederDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    const [selectedColumnName, setSelectedColumnName] = useState(""); // State for selected column name

    useEffect(() => {
        //on mount
        client
            .service("diabetes")
            .find({ query: { $limit: 100 } })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "diabetes", type: "error", message: error.message || "Failed get modelitems" });
            });
    }, []);

    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };
    // const onFakerCreateResults = (newEntities) => {
    //     setData([...data, ...newEntities]);
    // };
    // const onSeederResults = (newEntities) => {
    //     setData([...data, ...newEntities]);
    // };

    // const onEditResult = (newEntity) => {
    //     let _newData = _.cloneDeep(data);
    //     _newData[selectedEntityIndex] = newEntity;
    //     setData(_newData);
    // };

    // const deleteRow = async () => {
    //     try {
    //         await client.service("diabetes").remove(data[selectedEntityIndex]?._id);
    //         let _newData = data.filter((_, i) => i !== selectedEntityIndex);
    //         setData(_newData);
    //         setSelectedEntityIndex(null);
    //         setShowAreYouSureDialog(false)
    //     } catch (error) {
    //         console.log({ error });
    //         props.alert({ title: "diabetes", type: "error", message: error.message || "Failed delete record" });
    //     }
    // };
    const onRowDelete = (index) => {
        setSelectedEntityIndex(index);
        setShowAreYouSureDialog(true);
    };

    const onRowClick = (e) => { };

    // const menuItems = [
    //     {
    //         label: "Faker",
    //         icon: "pi pi-sliders-h",
    //         command: (e) => {
    //             setShowFakerDialog(true);
    //         },
    //     },
    //     {
    //         label: "Seeder",
    //         icon: "pi pi-forward",
    //         command: (e) => {
    //             setShowSeederDialog(true);
    //         },
    //     },
    // ];

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="grid col-10">
                <div className="col-12" role="diabetes-datatable">
                    <DataViewingTable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick} />
                </div>
            </div>
            {/* <AreYouSureDialog header="Delete" body="Are you sure you want to delete this record?" show={showAreYouSureDialog} onHide={() => setShowAreYouSureDialog(false)} onYes={() => deleteRow()} /> */}
            {/* <ModelitemsEditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} /> */}
            <DataViewingCreateComponents  show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
            {/* <ModelitemsFakerDialogComponent show={showFakerDialog} onHide={() => setShowFakerDialog(false)} onFakerCreateResults={onFakerCreateResults} /> */}
            {/* <ModelitemsSeederDialogComponent show={showSeederDialog} onHide={() => setShowSeederDialog(false)} onSeederResults={onSeederResults} /> */}
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
