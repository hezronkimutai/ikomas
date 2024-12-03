/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CategoryProduct from "./CategoryProduct";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryProducts({ categoryProducts }: any) {
    return (
        <div className="flex flex-wrap justify-between"> 
            {categoryProducts.map((product: any) =>
                <CategoryProduct key={product.title} product={product} />)}
        </div>
    );
}
