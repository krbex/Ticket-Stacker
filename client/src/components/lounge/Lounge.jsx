import React from 'react'
import grid from "../../assets/grid.png";

const Lounge = () => {
  return (
    <div className="lounge section container">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={grid} alt="pictures on a plant" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">Help through the airport</span>
            <p>
              We can arrange for helping minors navigate the airport safely and
              securely, offering you peace of mind
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Care on the flight</span>
            <p>
              We will ensure your child is safe and known to flight staff as an
              unaccompanied minor
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">
              Worried about a layover or your child making it home?
            </span>
            <p>
              Our chauffer service will make sure your child is never alone in
              an unfamiliar place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge
