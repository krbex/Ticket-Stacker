import React from 'react'
import Austin from "../../assets/Austin.jpg";
import London from "../../assets/London.jpg";
import LA from "../../assets/LA.jpg";
import NY from "../../assets/NY.jpg";
import traveler1 from "../../assets/traveler1.jpg";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: Austin,
    travelerImage: traveler1,
    travelerName: "Aidan",
    review: "'Hi I made this'",
  },
  {
    id: 2,
    destinationImage: London,
    travelerImage: traveler2,
    travelerName: "Marcus",
    review: "'Saved our vacation'",
  },
  {
    id: 3,
    destinationImage: NY,
    travelerImage: traveler3,
    travelerName: "Eric",
    review: "'Wonderfully helpful'",
  },
  {
    id: 4,
    destinationImage: LA,
    travelerImage: traveler4,
    travelerName: "Ethan",
    review: "'A great adventure'",
  },
];

const Travelers = () => {
  return (
    <div>
      <div className="travelers container section">
        <div className="sectionContainer">
          <h2>Traveler Reviews</h2>
          <div className="travelersContainer grid">
            {travelers.map(
              ({
                id,
                destinationImage,
                travelerImage,
                travelerName,
                review,
              }) => {
                return (
                  // Single traveler card
                  <div key={id} className="singleTraveler">
                    <img src={destinationImage} className="destinationImage" />

                    <div className="travelerDetails">
                      <div className="travelerPicture">
                        <img
                          src={travelerImage}
                          alt="traveler"
                          className="travelerImage"
                        />
                      </div>
                      <div className="travelerName">
                        <span>{travelerName}</span>
                        {review}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers