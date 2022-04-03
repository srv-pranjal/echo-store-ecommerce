import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setCategory(response.data.categories);
    })();
  }, []);
  return (
    <div>
      <h1 className="section__heading">Categories</h1>
      <section className="section category">
        {category.map(({ id, image, categoryName, altText }) => {
          return (
            <CategoryCard
              key={id}
              image={image}
              categoryName={categoryName}
              altText={altText}
            />
          );
        })}
      </section>
    </div>
  );
};
