import React from 'react'
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const SectionOne = () => {
    return (
        <section className='h-screen overflow-hidden'>
            <div className='flex items-center justify-between h-full'>
                <div className='p-20 flex-1'>
                    <p className='text-[9rem] font-bold leading-none mb-10'>Invest <br /> in real estate</p>
                    <div className='flex gap-4'>
                        <button className='btn bg-green-500 text-white'>Request a call</button>
                        <button className='btn border border-gray-600 font-medium'>To get the consultation</button>
                    </div>
                </div>
                <div className='flex-1 flex gap-4 justify-end'>
                    <img className='img' src={img1} alt="" />
                    <img className='img' src={img2} alt="" />
                    <img className='img' src={img3} alt="" />
                    <img className='img' src={img4} alt="" />
                    <img className='img' src={img5} alt="" />
                    <img className='img' src={img6} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionOne