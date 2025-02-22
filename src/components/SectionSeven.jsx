import React from 'react'

const SectionSeven = () => {
    return (
        <section>
            <div className="contact-bg flex flex-col items-center justify-center gap-10">
                <h1 className='text-white text-5xl text-center'>Learn more about <br /> investing with Binhoff</h1>
                <div className='flex gap-4'>
                    <input className='bg-white w-80 px-6 rounded-lg outline-none py-4' type="text" placeholder='Enter your Email' />
                    <button className='btn bg-black border border-gray-800 text-white px-20 '>Sign up</button>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven