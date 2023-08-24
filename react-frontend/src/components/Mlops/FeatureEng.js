import React from 'react';
import { Chart } from 'primereact/chart';

const LineGraph = ({ data }) => {
    return <Chart type="line" data={data} />;
};

export default LineGraph;