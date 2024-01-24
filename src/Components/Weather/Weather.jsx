import React, { useEffect, useState } from "react";
import weatherDetails from "../../API/WeatherApi";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const detailsOfWeather = await weatherDetails();
    // console.log(detailsOfWeather.current);
    setWeather(detailsOfWeather.current);
    setDate(detailsOfWeather.location.localtime);
  };

  return (
    <div
      style={{
        width: "31vw",
        minHeight: "20vh",
        background: "#101744",
        borderRadius: "12px",
        marginTop: "5px",
      }}>
      <div
        style={{
          height: "7vh",
          background: "#FF4ADE",
          borderRadius: "12px",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "1.5rem",
        }}>
        <span>{date}</span>
      </div>
      <div>
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
            {" "}
            <div>
              <img
                src={weather?.condition?.icon}
                style={{ width: "30px", height: "30px" }}
                alt="Weather condition icon"
              />
              <p>{weather?.condition?.text}</p>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "24px",
                  marginTop: "10px",
                }}>
                <span>{weather?.temp_c}Temp</span>
              </p>
              <p>{weather?.pressure_in}Pressure</p>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "24px",
                  marginTop: "10px",
                }}>
                {weather?.wind_kph} wind
              </p>
              <p>{weather?.humidity} humidity</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;
