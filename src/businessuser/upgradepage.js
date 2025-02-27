import React from "react";
import "./ThreeCards.css";

const ThreeCards = () => {


  return (
    <div className="cards-container">
   <div className="card">
  <div className="card-header">
    <div className="card-title">
      <h1>Basic Plan</h1>
    </div>
    </div>
    <div className="card-content">
      <ul>
        <li> Enable Trusted User tag</li>
        <li> Two-step verification</li>
        <li> News will expire in 100 days</li>
        <li> Enable link section</li>
        <li> Add social media</li>
      </ul>
      <br />
    </div>
 
  
</div>

<div className="card">
  <div className="card-header">
    <div className="card-title">
      <h1>Premium Plan</h1>
    </div>
    </div>
    <div className="card-content">
      <ul>
        <li>Enable Trusted User tag</li>
        <li>Edit news</li>
        <li>Two-step verification</li>
        <li>News will expire in 100 days</li>
        <li>Increase news text characters up to 3000</li>
        <li>Enable link section</li>
        <li>Add social media</li>
        <li>Change Profile pic</li>
        <li>Post images</li>
      </ul>
      <br />
    </div>
 
</div>




<div className="card">
  <div className="card-header">
    <div className="card-title">
      <h1>Premium Pro Plan</h1>
    </div>
    </div>
    <div className="card-content">
      <ul>
        <li>Enable Trusted User tag</li>
        <li>Ads free</li>
        <li>Edit news</li>
        <li>Two-step verification</li>
        <li>News will expire in 100 days</li>
        <li>News will expire in 1 year</li>
        <li>Increase news text characters up to 3000</li>
        <li>Email notification alert</li>
        <li>Enable link section</li>
        <li>Add social media</li>
        <li>View tracking</li>
        <li>It is displayed at the top of the service list</li>
        <li>Change Profile pic</li>
        <li>Post images</li>
        <li>Enable collaboration</li>
      </ul>
      <br />
    </div>
</div>
<div className="card-footer">
<a href="/business/payment?plan=monthly&discounted=29"> 
  <button>
      Monthly <strike>₹390</strike> ₹29
  </button>
</a>

</div>


<div className="card-footer">
<a href="/business/payment"> 
  <button>
      Monthly <strike>₹390</strike> ₹29
  </button>
</a>
</div>


<div className="card-footer">
<a href="/business/payment"> 
  <button>
      Monthly <strike>₹390</strike> ₹29
  </button>
</a>
</div>
    
    </div>
  );
};

export default ThreeCards;
