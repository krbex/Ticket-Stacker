import React from 'react'

const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Plan your flight with confidence</h2>
          <p>
            Find support for your travel plans and see what our support team can
            do to help ensure a great journey
          </p>
        </div>

        <div className="infoDiv grid flex">
          <div className="textDiv grid flex">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for London</h4>
              <p>
                Find support for your travel plans and see what our support team
                can do to help ensure a great journey
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Claim a travel deduction for your business</h4>
              <p>
                Find support for your travel plans and see what our support team
                can do to help ensure a great journey
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find support for your travel plans and see what our support team
                can do to help ensure a great journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support