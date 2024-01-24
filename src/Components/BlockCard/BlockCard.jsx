import React, { useEffect, useState } from "react";

export default function BlockCard({
  id,
  image,
  color,
  key,
  Category,
  setCategories,
}) {
  const [isSelected, setIsSelected] = useState(false);

  
  const addValueToCategory = (value) => {
    const existingValue = Category.filter((categoryList) => { 
      return categoryList === value
    });
    // console.log(existingValue);

    if (existingValue.length === 0) {
      setCategories([...Category, value]);
    } else {
      const newCategory = Category.filter(
        (categoryList) => categoryList !== value
      );
      setCategories(newCategory);
    }
  };

  useEffect(()=>{
    const value = Category.includes(id)===true;
    setIsSelected(value);
  })

  return (
    <div
      onClick={() => {
        addValueToCategory(id);
        setIsSelected(!isSelected);
      }}
      style={{
        background: color,
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border: `${isSelected ? "4px solid green" : "4px solid white"}`,
      }}
      key={key}>
      <p style={{ marginBottom: "4px", fontSize: "18px" }}>{id}</p>
      {image}
    </div>
  );
}
