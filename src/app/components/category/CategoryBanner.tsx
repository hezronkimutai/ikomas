
"use client";
import Image from 'next/image';
import phone from '../../assets/601bea0981e93549b46e447f8545e924.png'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Banner() {

    return (
        <div className="flex flex-row bg-orange-400 rounded-[10px] py-4 px-10 sm:w-[60%]  md:w-[60%]  w-[100%]">
            <div className="flex flex-col text-white">
                <div>Best Deal Online on Smart Phones</div>
                <div className="text-[40px] font-bold leading-[63px] text-left  decoration-skip-[ink] lg:text-[40px] lg:leading-[63px] sm:text-[15px] sm:leading-[15px]">
                    AT CHEAP PRICE
                </div>
                <div>UPTO 60% OFF</div>
            </div>
            <div className='relative  w-[20%] overflow-hidden'>
                <Image
                    src={phone}
                    alt="Verified"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
