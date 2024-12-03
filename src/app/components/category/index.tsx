"use client";

import { useEffect, useState } from "react";
import CategoryBanner from "./CategoryBanner";
import CategoryDetails from "./CategoryDetails";
import CategoryProducts from "./CategoryProducts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Category({ category }: any) {
    const [categoryProducts, setCategoryProducts] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(json => setCategoryProducts(json))
    }, [])
    return (
        <div className="flex flex-col bg-gray-100 my-2 m-0 rounded-[10px] p-2">
            <div className="flex sm:flex-row md:flex-row flex-col justify-between">
                <CategoryBanner category={category} />
                <CategoryDetails category={category} />
            </div>
            <CategoryProducts categoryProducts={categoryProducts.slice(0, 4)} />
        </div>
    );
}
