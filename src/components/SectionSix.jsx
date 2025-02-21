import React from 'react'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'

const SectionSix = () => {
    return (
        <section className='p-40'>
            <h1 className='text-6xl p-40 text-gray-800 text-center'>The unique investment opportunity</h1>
            <div className='flex gap-12 items-center justify-center p-12'>
                <div className='box'>
                    <img src={icon1} alt="" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cupiditate recusandae maxime error possimus doloribus veniam eos animi.</p>
                    <button>View More</button>
                </div>
                <div className='box'>
                    <img src={icon2} alt="" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cupiditate recusandae maxime error possimus doloribus veniam eos animi.</p>
                    <button>View More</button>
                </div>
                <div className='box'>
                    <img src={icon3} alt="" />
                    <h3>Private investors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cupiditate recusandae maxime error possimus doloribus veniam eos animi.</p>
                    <button>View More</button>
                </div>
            </div>
        </section>
    )
}

export default SectionSix