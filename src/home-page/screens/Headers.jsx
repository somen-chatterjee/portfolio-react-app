// import React from 'react'

// function headers() {
//   return (
//     <div>headers</div>
//   )
// }

// export default headers

function Headers() {
    return (
        <header className="flex flex-row items-center justify-between sm:justify-around p-4 bg-white">
            <div className="flex flex-row items-center">
                <div className="bg-[#A53DFF] w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-2xl">S</span>
                </div>
                <div className="text-black font-medium text-3xl">Somen</div>
            </div>
            <div className="flex flex-row">
                <nav className="hidden sm:flex items-center gap-10 font-semibold">
                    <button className="text-[#333333] font-normal text-xs">
                        Home
                    </button>
                    <button className="text-[#333333] font-normal text-xs">
                        About
                    </button>
                    <button className="text-[#333333] font-normal text-xs">
                        Process
                    </button>
                    <button className="text-[#333333] font-normal text-xs">
                        Protfolio
                    </button>
                    <button className="text-[#333333] font-normal text-xs">
                        Blog
                    </button>
                    <button className="text-[#333333] font-normal text-xs">
                        Services
                    </button>
                </nav>
                <button className="bg-[#A53DFF] px-5 py-3 mx-4 rounded-sm text-white font-normal text-xs">
                    Contact
                </button>
            </div>
        </header>
    );
}

export default Headers;
