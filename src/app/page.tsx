"use client";

import { useAppContext } from "@/context/AppContext"; // Adjust the import path accordingly
import Category from "./components/category";

export default function Home() {
  const { categories } = useAppContext();

  return (
    <div className="w-[90%] mx-auto">
      {categories.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </div>
  );
}
