import React from "react";
import HeaderNav from "../components/common/common";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const dashboard = () => {
  return (
    <div>
      <HeaderNav />
      <div className="row">
        <div className="col-3">
          <h5> Replenish Now</h5>
          <div className="">
            <h3> 3</h3>
            <p> SKUs</p>
            <p> View All</p>
          </div>
        </div>
        <div className="col-3">
          <h3> Replenish Soon</h3>
          <div className="">
            <h3> 5</h3>
            <p> SKUs</p>
            <p> View All</p>
          </div>
        </div>
        <div className="col-3">
          <h3> All SKUs</h3>
          <div className="">
            <h3> 3</h3>
            <p> SKUs</p>
            <p> View All</p>
          </div>
        </div>
      </div>


      <div className="">
      {/* <Chart type='line'  /> */}

      </div>
    </div>
  );
};

export default dashboard;
