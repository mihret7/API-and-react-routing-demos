import React, { useEffect, useState } from 'react'
import "./UsingRandomUser.css";

function UsingRandomUser() {
  const [result, setResult] = useState(null);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results[0]);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // We should use optional chaining (introduced in ES2020 JavaScript.) It safely accesses nested object properties without throwing an error if something is null or undefined.
  // since setResult() triggers a re-render, img will always be up-to-date. (re-rendered later)
  const img = result?.picture?.large;
  const fullName = result?.name?.first;
  const location = `${result?.location?.city}, ${result?.location?.country}`;
  const email = result?.email;
  const age = result?.dob?.age;
  const phone = result?.phone;

  return (
    <>
      <div className="card">
        <div className="details">
          <div className="user_photo horizontal_center" id="user_photo">
            <img src={img} />
          </div>

          <p id="user_title">Hi, My name is</p>
          <p id="user_value">{fullName}</p>
          <div className="center">
            <p className="left">Location: {location}</p>
            <p className="left">Email: {email}</p>
            <p className="left">Age: {age}</p>
            <p className="left">Phone: {phone}</p>
          </div>
        </div>
        <button className="refresh-btn" onClick={fetchUser}>
          Refresh
        </button>
      </div>
    </>
  );
}

export default UsingRandomUser
