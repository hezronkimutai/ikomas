"use client";
import Image from 'next/image';
import verified from '../../assets/6dcef157d833c879d3fdf8e66f4b943f.png';
import phone from '../../assets/fe0b4fd617d408d9d84eaa5c622ec636.png';

import followers from '../../assets/676612d669d8fe156ce59fe3f581f6c0.png';

import star from '../../assets/star.svg';

import address from '../../assets/164734e4b0c2ba5fa5cfdc675c78ee59.png';

import location from '../../assets/location.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryDetails({ category }: any) {

    return (
        <div className="">
            <h1 className='text-[#FF8307]  text-[30px] font-bold leading-[53px] text-left  decoration-skip-[ink] lg:text-[30px] lg:leading-[53px] sm:text-[10px] sm:leading-[10px]'>{category}</h1>
            <div className='flex flex-row py-1'>
                <Image
                    src={verified}
                    alt="verified"
                    width={20}
                    height={20}
                />
                <div className='px-3'>Verified</div>
            </div>
            <div className='flex flex-row py-1'>
                <Image
                    src={phone}
                    alt="phone"
                    width={20}
                    height={20}
                />
                <div className='px-3'>0759753332 </div>
            </div>
            <div className='flex flex-row py-1'>
                <Image
                    src={followers}
                    alt="followers"
                    width={20}
                    height={20}
                />
                <div className='px-3'>600 Followers</div>
                <button className='px-2 mx-6 text-white rounded bg-[#FF8307]'>Follow</button>
            </div>
            <div className='flex flex-row py-1'>
                <Image
                    src={location}
                    alt="location"
                    width={20}
                    height={20}
                />
                <div className='px-3'> Karen, Nairobi</div>
            </div>
            <div className='flex flex-row py-1'>
                <Image
                    src={address}
                    alt="address"
                    width={20}
                    height={20}
                />
                <div className='px-3'>Sawa mall, G14 </div>
            </div>
            <div className='flex flex-row py-1'>
                <Image
                    src={star}
                    alt="star"
                    width={20}
                    height={20}
                />
                <div className='px-3'>4.5</div>
            </div>
        </div>
    );
}
