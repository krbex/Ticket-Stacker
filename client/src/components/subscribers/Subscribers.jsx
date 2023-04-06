import React from 'react'

const Subscribers = () => {
  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h2>Subscribe to receive our newsletter and our hottest deals</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribers