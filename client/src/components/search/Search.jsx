import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-DatePicker.css";

const Search = () => {

  const [startDate, setStartDate] = useState();
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    ></input>
  ));

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
                <input type="text" placeholder="Where are you flying?" />
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
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                  dayClassName={() => "example-datepicker-day-class"}
                  popperClassName="example-datepicker-class"
                  todayButton="TODAY"
                />
              </div>
            </div>
            <button className="btn btnBlock flex">Search Flight</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
