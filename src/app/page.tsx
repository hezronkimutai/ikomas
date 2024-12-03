"use client";

import { useEffect, useState } from "react";
import Category from "./components/category";

export default function Home() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  return (
    <div className="">
      {categories.map((category, index) => <Category category={category} key={index} />)}
    </div>
  );
}
