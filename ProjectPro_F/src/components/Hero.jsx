import React from "react";
import HeroImage from "../assets/images/stock-quickbase-product-gantt-chart.png";

import { Button } from "./ui/button";
import Quote from "./Quote";
import { CardWithLink } from "./CardWithLink";
const Hero = () => {
  return (
    <div>
      <div className=" h-screen flex items-center justify-center ">
        <div className="grid grid-cols-2 grid-rows-1 gap-4 items-center">
          <div>
            <h1 className=" text-5xl mb-8 font-sans hover:font-serif">
              Centralize and manage your projects
            </h1>
            <p className=" text-2xl font-light mb-8 font-serif">
              Connect your project data, track progress, and collaborate with
              your teams using a single source of truth — Quickbase.
            </p>
            <Button>Get Started</Button>
          </div>
          <div>
            {" "}
            <img src={HeroImage} alt="" className="" />
          </div>
        </div>
      </div>
      <Quote />
      <div className=" flex justify-between my-10">
        <CardWithLink title="Organize" />
        <CardWithLink title="Collaborate" />
        <CardWithLink title="Customize" />
      </div>
    </div>
  );
};

export default Hero;
