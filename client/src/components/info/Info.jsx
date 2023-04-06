import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";

const Info = () => {
  return (
    <div>
      <div className="info section">
        <div className="infoContainer container">
          <div className="titleDiv flex">
            <h2>Travel around the world with Ticket Stacker</h2>
            <button className="btn">View All</button>
          </div>

          <div className="cardsDiv grid">
            <div className="singleCard grid">
              <div className="iconDiv flex colorOne">
                <RxCalendar className="icon" />
              </div>
              <span className="cardTitle">Book & Relax</span>
              <p>Take the hassle out of planning something relaxing</p>
            </div>

            <div className="singleCard grid">
              <div className="iconDiv flex colorTwo">
                <BsShieldCheck className="icon" />
              </div>
              <span className="cardTitle">Plan your getaway</span>
              <p>
                You can also call us from your phone to book your getaway at
                1(888)TIC-KETS
              </p>
            </div>

            <div className="singleCard grid">
              <div className="iconDiv flex">
                <BsBookmarkCheck className="icon" />
              </div>
              <span className="cardTitle">Save more with our trip planner</span>
              <p>
                We partner with top vacation rentals around the world to bring
                you the best prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info