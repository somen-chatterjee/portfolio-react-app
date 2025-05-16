// import React from 'react'

// function headers() {
//   return (
//     <div>headers</div>
//   )
// }

// export default headers

import React from "react";

function Headers() {
    return (
        <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
            <a
                href="/"
                className="bg-[#A53DFF] w-12 h-12 rounded-full flex items-center justify-center"
            >
                <span className="text-white font-medium text-lg">S</span>
            </a>
            <nav className="hidden sm:flex items-center gap-x-4 font-semibold">
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        Home
                    </span>
                </a>
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        About
                    </span>
                </a>
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        Process
                    </span>
                </a>
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        Protfolio
                    </span>
                </a>
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        Blog
                    </span>
                </a>
                <a href="#">
                    <span className="text-[#333333] font-medium text-xs">
                        Services
                    </span>
                </a>

                <a href="#" className="bg-[#A53DFF] p-1.5">
                    <span className="text-white font-semibold text-xs">
                        Contact
                    </span>
                </a>
            </nav>
        </header>
    );
}

export default Headers;
