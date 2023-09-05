import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TabView, TabPanel } from 'primereact/tabview';
import ModelitemsPage from "../ModelitemsPage/ModelitemsPage";
import DataCard from "../ModelitemsPage/DataCard";
import DataViewingPage from "../DataViewingPage/DataViewingPage";

const DataExplore = () => {

  useEffect(() => { }, []);
  return (
    <div className="card w-12 ">
      <TabView>
        <TabPanel header="Data Visualisation">
          <DataViewingPage />
        </TabPanel>
        <TabPanel header="Feature Eng.">
          <DataCard />
        </TabPanel>
        <TabPanel header="Model Comparison">
          <ModelitemsPage />
        </TabPanel>
        <TabPanel header="Model Re-Training">
          <DataCard />

        </TabPanel>
      </TabView>
    </div>
  )
}
const mapState = (state) => {
  //
  return {};
};
const mapDispatch = (dispatch) => ({
  //
});

export default connect(mapState, mapDispatch)(DataExplore);