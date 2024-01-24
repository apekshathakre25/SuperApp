import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Notes from "../../Components/Notes/Notes";
import { useNavigate } from "react-router-dom";
import News from "../../Components/News/News";
import Weather from "../../Components/Weather/Weather";
import Timer from "../../Components/Time/Timer";


const Home = () => {
  const navigate = useNavigate();

  const onMovies = () =>{
    navigate("/Movies")
  }
  return (
    <div
      style={{
        height: "120vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <ProfileCard />
          <Weather/>
          <Timer />
        </div>
        <div>
          <Notes />
         
        </div>
        <div>
          <News />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "3vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
        }} onClick={onMovies}>
        Next Page
      </button>
    </div>
  );
};

export default Home;
