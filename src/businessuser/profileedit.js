import React, { useState, useEffect } from "react";
import UserData from "./UserData";
import './profileedit.css';

function ServiceDetailsForm() {
  const [details, setDetails] = useState({
    serviceName: "",
    phoneNumber: "",
    ownerName: "",
    personalEmail: "",
    serviceUrl: "",
    about: "",
    address: "",
    businessName: "",
    businessEmails: [""],
    businessPhoneNumbers: [""],
    serviceTypes: [""],
    serviceAreaPincodes: [""],
  });

  const [localStorageEmail, setLocalStorageEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setLocalStorageEmail(email);
  }, []);

  const handleChange = (e, index, field) => {
    const { name, value } = e.target;
    if (["businessEmails", "businessPhoneNumbers", "serviceTypes", "serviceAreaPincodes"].includes(field)) {
      setDetails((prev) => {
        const newArray = [...prev[field]];
        newArray[index] = value;
        return { ...prev, [field]: newArray };
      });
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addField = (field) => {
    setDetails((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeField = (index, field) => {
    setDetails((prev) => {
      const newArray = [...prev[field]];
      newArray.splice(index, 1);
      return { ...prev, [field]: newArray };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        alert("User email not found. Please login or register.");
        return;
      }

      const payloads = [
        { url: "/update/about", body: { personalEmail: email, about: details.about } },
        { url: "/update/address", body: { personalEmail: email, address: details.address } },
        { url: "/update/ownername", body: { personalEmail: email, ownerName: details.ownerName } },
        { url: "/update/phone", body: { personalEmail: email, phone: details.phoneNumber } },
        { url: "/update/serviceUrl", body: { personalEmail: email, serviceUrl: details.serviceUrl } },
        { url: "/update/businessEmails", body: { personalEmail: email, businessEmails: details.businessEmails } },
        { url: "/update/businessName", body: { personalEmail: email, businessName: details.businessName } },
        { url: "/update/businessPhoneNumbers", body: { personalEmail: email, businessPhoneNumbers: details.businessPhoneNumbers } },
        { url: "/update/servicename", body: { personalEmail: email, serviceName: details.serviceName } },
        { url: "/update/serviceTypes", body: { personalEmail: email, serviceTypes: details.serviceTypes } },
        { url: "/update/pincodes", body: { personalEmail: email, serviceAreaPincodes: details.serviceAreaPincodes } },
      ];

      await Promise.all(
        payloads.map(({ url, body }) =>
          fetch(`http://localhost:3000/api/users${url}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
        )
      );

      alert("Details successfully updated!");
      setSubmitted(true);
    } catch (error) {
      alert("Failed to update details. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Business verification</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Service Name:
          <input type="text" name="serviceName" value={details.serviceName} onChange={handleChange} />
        </label> */}
           <label>Business Name:
          <input type="text" name="businessName" value={details.businessName} onChange={handleChange} />
        </label>


        <label>Phone Number:
          <input type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} />
        </label>

        <label>Owner Name:
          <input type="text" name="ownerName" value={details.ownerName} onChange={handleChange} />
        </label>

        <label>Personal Email:
          <input type="email" name="personalEmail" value={details.personalEmail} onChange={handleChange} />
        </label>

        {/* <label>Service URL:
          <input type="url" name="serviceUrl" value={details.serviceUrl} onChange={handleChange} />
        </label> */}

        <label>About:
          <textarea name="about" value={details.about} onChange={handleChange} />
        </label>

        <label>Address:
          <input type="text" name="address" value={details.address} onChange={handleChange} />
        </label>

     
        {/* {details.businessEmails.map((email, index) => (
          <div key={index}>
            <label>Business Email:
              <input type="email" value={email} onChange={(e) => handleChange(e, index, "businessEmails")} />
            </label>
            <button type="button" onClick={() => removeField(index, "businessEmails")}>Remove</button>
          </div>
        ))}<br/>
        <button type="button" onClick={() => addField("businessEmails")}>Add Another Business Email</button> */}

        {/* {details.businessPhoneNumbers.map((phone, index) => (
          <div key={index}>
            <label>Business Phone Number:
              <input type="text" value={phone} onChange={(e) => handleChange(e, index, "businessPhoneNumbers")} />
            </label>
            <button type="button" onClick={() => removeField(index, "businessPhoneNumbers")}>Remove</button>
          </div>
        ))}<br/>
        <button type="button" onClick={() => addField("businessPhoneNumbers")}>Add Another Phone Number</button> */}
{/* 
        {details.serviceTypes.map((type, index) => (
          <div key={index}>
            <label>Service Type:
              <input type="text" value={type} onChange={(e) => handleChange(e, index, "serviceTypes")} />
            </label>
            <button type="button" onClick={() => removeField(index, "serviceTypes")}>Remove</button>
          </div>
        ))}<br/>
        <button type="button" onClick={() => addField("serviceTypes")}>Add Another Service Type</button> */}

        {/* {details.serviceAreaPincodes.map((pincode, index) => (
          <div key={index}>
            <label>Service Area Pincode:
              <input type="text" value={pincode} onChange={(e) => handleChange(e, index, "serviceAreaPincodes")} />
            </label>
            <button type="button" onClick={() => removeField(index, "serviceAreaPincodes")}>Remove</button>
          </div>
        ))}<br/>
        <button type="button" onClick={() => addField("serviceAreaPincodes")}>Add Another Pincode</button><br/><br/> */}

        <button type="submit">Submit</button>
      </form>

      {submitted && <UserData />}
    </div>
  );
}

export default ServiceDetailsForm;
