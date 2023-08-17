import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className=" w-8">
                    <h4 className="ml-4">Microservices Ready</h4>
                    <div className="w-full flex justify-content-center flex-wrap ">
                        <></>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/users'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Users</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/modelitems'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Modelitems</div></div></Link></div>
                        {/* ~cb-add-services-card~ */}
                    </div>
                </div>
                <div className="w-4 flex flex-column align-items-center">
                    <img src={welcomeImg} alt="welcome image" className="h-30rem" role="lady-image" />
                    <p className="text-7xl m-0" role="welcome-text">
                        Welcome!
                    </p>
                    <p>You are ready to go!</p>
                </div>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
