import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

const CarouselComponent = () => {
    const images = [
        { source: 'https://tse1.mm.bing.net/th?id=OIP.nKp--ILXaUwIwF9QRhhXpgHaC0&pid=Api&P=0&h=180', alt: 'Image 1' },
        { source: 'https://tse1.mm.bing.net/th?id=OIP.nKp--ILXaUwIwF9QRhhXpgHaC0&pid=Api&P=0&h=180', alt: 'Image 2' },
        { source: 'https://tse3.mm.bing.net/th?id=OIP.lX4vKiBvUYV5XwB6FqpsRQHaEK&pid=Api&P=0&h=180', alt: 'Image 3' },
    ];
  
    const itemTemplate = (item) => {
      return (
        <div>
          <img src={item.source} alt={item.alt} />
        </div>
      );
    };
 
    return (
      <div className="col-12 m-0 align-items-center carousel-demo">
        <Carousel value={images} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={itemTemplate} />
      </div>
    );

};

const MlopsView = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-12">
            <CarouselComponent />
                <div className="card w-auto">
                <div className="surface-0 text-center">
                    <div className="mb-3 font-bold text-3xl">
                        <span className="text-primary">ML </span>
                        <span className="text-900">Ops</span>
                    </div>
                    <div className="text-700 mb-6">MLOps streamlines ML model deployment, maintenance, involving data scientists, devops, and IT collaboration.</div>
                    <div className="grid">
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
                            <a href="/dataexplo">
                                <Button label="Get started" type="button" className="p-button-raised" />
                            </a>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-desktop text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">Learn More</div>
                            <a href="https://youtu.be/MrurgA-IkjA" target="blank">
                                <Button label="About MLops" type="button" className="p-button-outlined" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                <CarouselComponent />
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

export default connect(mapState, mapDispatch)(MlopsView);
