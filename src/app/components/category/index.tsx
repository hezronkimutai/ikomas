/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import CategoryBanner from "./CategoryBanner";
import CategoryDetails from "./CategoryDetails";
import CategoryProductList from "./CategoryProductList";

interface CategoryProps {
    category: string;
}

export default function Category({ category }: CategoryProps) {
    const { fetchCategoryProducts } = useAppContext();
    const [categoryProducts, setCategoryProducts] = useState<any[]>([]);

    useEffect(() => {
        fetchCategoryProducts(category).then(setCategoryProducts);
    }, [category, fetchCategoryProducts]);

    return (
        <div className="flex flex-col bg-gray-100 my-2 m-0 rounded-[10px] p-2">
            <div className="flex sm:flex-row md:flex-row flex-col justify-between">
                <CategoryBanner />
                <CategoryDetails category={category} />
            </div>
            <CategoryProductList categoryProducts={categoryProducts.slice(0, 4)} />
        </div>
    );
}
