import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>

          <div className="searchInputs flex">
            {/* Single Input */}
            <div className="singleInput flex">
              <div className="inconDiv">
                <HiOutlineLocationMarker className="icon" />
              </div>
              <div className="texts">
                <h4>Location</h4>
                <input type="text" placeholder="Where are you flying today?" />
              </div>
            </div>
            {/* Single Input */}
            <div className="singleInput flex">
              <div className="inconDiv">
                <RiAccountPinCircleLine className="icon" />
              </div>
              <div className="texts">
                <h4>Travelers</h4>
                <input type="text" placeholder="Add additional passengers" />
              </div>
            </div>
            {/* Single Input */}
            <div className="singleInput flex">
              <div className="inconDiv">
                <RxCalendar className="icon" />
              </div>
              <div className="texts">
                <h4>Date</h4>
                <input type="text" placeholder="When are you flying?" />

                <button className="btn btnBlock flex">Search Flight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
