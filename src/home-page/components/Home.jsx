function Home() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* use for background color */}
            <div className="absolute w-[871px] h-[871px] bg-[#DA4DF1] opacity-40 rounded-full -top-[90%] right-[-450px] -z-1 blur-[350px]"></div>
            {/* use for background color */}
            <div className="absolute w-[871px] h-[871px] bg-[#C4F5E9] opacity-70 rounded-full -bottom-[18%] right-[-450px] -z-1 blur-[350px]"></div>
            {/* use for main content */}
            <div className="flex flex-row items-center mt-28 ml-48 mr-48">
                <div className="flex flex-col mr-36">
                    <div className="text-6xl font-semibold">
                        Hello I'm
                        <br />
                        Somen Chatterjee
                    </div>
                    <div className="text-base font-normal text-[#556070] mt-4">
                        I'm a Freelance UI/UX Designer and Developer based in
                        London, England. I strives to build immersive and
                        beautiful web applications through carefully crafted
                        code and user-centric design.
                    </div>
                </div>
                <div className="flex flex-shrink-0 w-[400px] h-[500px] bg-white shadow-xl rounded-3xl content-center items-center justify-center">
                    <img
                        className="w-full h-full"
                        src="src/assets/man.png"
                        alt="Profile image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
