"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryProduct({ product }: any) {
    return (
        <div className="my-2 max-w-[24%]">
            <h1>{product.title}</h1>
        </div>
    );
}
