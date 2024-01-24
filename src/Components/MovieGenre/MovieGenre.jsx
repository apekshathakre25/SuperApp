import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../MovieGenre/MovieGenre.module.css";
import BlockCard from "../BlockCard/BlockCard.jsx";
import action from "../../Assets/images/action.png";
import drama from "../../Assets/images/drama.png";
import fantasy from "../../Assets/images/fantasy.png";
import fiction from "../../Assets/images/fiction.png";
import horror from "../../Assets/images/horror.png";
import music from "../../Assets/images/music.png";
import romance from "../../Assets/images/romance.png";
import thriller from "../../Assets/images/thriller.png";
import western from "../../Assets/images/western.png";

const DEFAULT_GENRES = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "160px", height: "120px" }}
        src={action}
        alt="Action genre"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];

const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  // useEffect(() => {
  //   console.log(categories);
  // }, ["categories", categories]);

  const removeCategory = (value) => {
    const newCategory = categories.filter((category) => category !== value);
    console.log(newCategory);
    setCategories(newCategory);
  };

  const handleSubmit = () => {
    if (categories.length === 0) {
      setLengthError(true);
      return;
    }
    localStorage.setItem("genre", categories);
    navigate("/");
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh" }}>
          {categories.map((category) => (
            <div key={category} style={{ color: "white" }}>
              {category}
              <button onClick={() => removeCategory(category)}>X</button>
            </div>
          ))}
          {lengthError ? (
            <p className={styles.error}>Please choose at least 3</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {DEFAULT_GENRES.map((ap) => (
          <BlockCard
            key={ap.id}
            id={ap.id}
            image={ap.image}
            color={ap.color}
            Category={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleSubmit}>
        Next Page
      </button>
    </div>
  );
};

export default Category;
