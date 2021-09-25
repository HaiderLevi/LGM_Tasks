import React from "react";
import "../App.css";
import "animate.css";
import beast from "../images/beast.jpg";

const Home1 = () => {
  return (
    <div className="welcome container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12">
          <div className="text-center para pt-4">
            <h4 className="py-4 fw-bold text-justify">
              Welcome to Attack On Titan Wiki
            </h4>
            <h4 className="py-4 fw-bold text-justify">
              Today's Character: Beast Titan
            </h4>
            <p className="text-justify">
              The Beast Titan was one of the Nine Titans. Typically, it was slightly larger than most Titans and took on an animal-like appearance. Unlike the majority of other Titans, which retained a largely "human" appearance, the Beast Titan exhibited certain animal-like traits, which may have varied depending on its holders: some of the various animal appearances shown from prior holders of the Beast Titan have included monkeys, birds, crocodiles, elk, bulls, wolves, snakes, rabbits, dinosaurs, okapis and goats.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center">
            <img
              src={beast}
              className="img-fluid beast animate__animated animate__pulse animate__delay-1s animate__infinite	infinite"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
