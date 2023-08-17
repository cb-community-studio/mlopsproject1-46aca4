import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TabView, TabPanel } from 'primereact/tabview';
import ModelitemsPage from "../ModelitemsPage/ModelitemsPage";

const DataExplore = () => {
    
  useEffect(() => {}, []);
  return (
      <div className="card w-12 ">
          <TabView>
              <TabPanel header="Table View">
                <ModelitemsPage />
              </TabPanel>
              <TabPanel header="FE">
              </TabPanel>
              <TabPanel header="Comprison">
                
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