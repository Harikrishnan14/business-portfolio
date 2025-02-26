import React, { useState } from 'react'
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const SectionFive = () => {

    const [isClick, setIsClick] = useState(false)

    const articles = [
        {
            id: 1,
            img: img1,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
        {
            id: 2,
            img: img2,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
        {
            id: 3,
            img: img3,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
        {
            id: 4,
            img: img4,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
        {
            id: 5,
            img: img5,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
        {
            id: 6,
            img: img6,
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium!"
        },
    ]

    return (
        <section className='p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300'>
            <h1 className='text-4xl text-bold'>Actual news</h1>
            <div className='flex flex-wrap items-center justify-center gap-12'>
                {articles?.map((item, index) => (
                    <div className={`${index >= 4 && !isClick ? "hidden" : ""} flex flex-col gap-2 w-96 article`} key={index}>
                        <img className='min-h-[500px] max-h-[600px] h-full object-cover rounded-xl' src={item?.img} alt="" />
                        <h3>{item?.headline}</h3>
                        <button className='text-green-500 font-bold'>More details</button>
                    </div>
                ))}
            </div>
            <button onClick={() => setIsClick(!isClick)} className='btn border border-gray-300 px-12 mt-12'>
                See {isClick ? "Less" : "More"}
            </button>
        </section>
    )
}

export default SectionFive