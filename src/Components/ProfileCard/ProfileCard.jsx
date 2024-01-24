import Profile from "../../Assets/images/profileBig.png";
import React from "react";

const ProfileCard = () => {
  let userData = localStorage.getItem("userData");
  let userDetails;

  let genreData = localStorage.getItem("genre");
  let genreDetails;

  if (userData) {
    userDetails = JSON.parse(userData);
  }

  if (genreData) {
    genreDetails = genreData.split(" , ");
  }

  return (
    <div
      style={{
        width: "30vw",
        minHeight: "40vh",
        background: "#5746EA",
        borderRadius: "12px",
        padding: "6px",
        display: "flex",
        gap: "12px",
      }}>
      <div>
        <img
          src={Profile}
          alt="Profile"
          style={{
            height: "32vh",
            width: "10vw",
            position: "relative",
            top: "2vh",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
        <p style={{ color: "white", fontSize: "1.3rem" }}>
          {userDetails?.name}
        </p>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
          {userDetails?.email}
        </p>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
          {userDetails?.mobile}{" "}
        </p>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
            {genreDetails} </p>
      </div>
    </div>
  );
};

export default ProfileCard;
