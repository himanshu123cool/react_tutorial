import React from "react";
import Card from "./Card";


function Service() {
  return (
    <div className="container py-5" id="service">
        <div className="row">
            <h2 className="text-center mb-5">Our Services</h2>
        </div>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 col-md-4 ol-4">
            <Card/>
        </div>
        <div className="col-12 col-sm-4 col-md-4 ">
            <Card/>
        </div>
        <div className="col-12 col-sm-4 col-md-4 ">
            <Card/>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-4 ">
            <Card/>
        </div>
        <div className="col-12 col-sm-4 col-md-4 ">
            <Card/>
        </div>
        <div className="col-12 col-sm-4 col-md-4 ">
            <Card/>
        </div>
      </div>
    </div>
  );
}

export default Service;
