
"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Banner({ category }: any) {
    console.log(category);

    return (
        <div className="flex flex-row bg-orange-400 rounded-[10px] p-4">
            <div className="flex flex-col">
                <div>Best Deal Online on Smart Phones</div>
                <div><h1>AT CHEAP PRICE</h1></div>
                <div>UPTO 60% OFF</div>
            </div>
            <div></div>
        </div>
    );
}
