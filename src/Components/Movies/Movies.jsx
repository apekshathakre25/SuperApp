import React from "react";
import Profile from "../../Assets/images/profileSmall.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import movieDetails from "../../API/MovieApi";


const Movies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // useEffect(() => {
    //     let userDetails = localStorage.getItem("userData");

    //     if (userDetails) {
    //         userDetails = JSON.parse(userDetails);
    //         navigate("/register");
    //     }
    // }, []);

    const fetchMovies = async () => {
        const getUrl = await movieDetails("fiction");
        // console.log(getUrl)
        setMoviesList(getUrl.Search);
        console.log(getUrl.Search)
    };

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    background: "black",
                    overflowX: "hidden",
                    maxHeight: "100vh",
                }}
            >
                <div onClick={navigateToHome}>
                    <img
                        src={Profile}
                        style={{
                            position: "absolute",
                            top: "2vh",
                            right: "3vw",
                            height: "60px",
                            width: "60px",
                        }}
                    />
                </div>
                <p
                    style={{
                        color: "green",
                        fontSize: "3rem",
                        margin: "1vw",
                    }}
                    // className={styles.header}
                >
                    Super app
                </p>
                <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
                    Entertainment according to your choice
                </p>
                {/* {movies.map((movie) => (
                    <List genre={movie} />
                ))} */}
                {moviesList.map((movie) => (
                    <div style={{ color: "white" }}>{movie?.Title}</div>
                ))}
            </div>
        </>
    );
};

export default Movies;