import React from 'react'

const Nav = () => {
    return (
        <nav className='fixed bg-bg_color z-10 w-full flex items-center justify-between py-6 px-10 border-b border-gray-300'>
            <div className='text-2xl font-bold'>Binhoff</div>
            <ul className='flex items-center gap-40 text-sm font-medium [&>*]:cursor-pointer'>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className='font-bold border border-gray-300 py-3 px-8 rounded-full'>sign up</button>
        </nav>
    )
}

export default Nav