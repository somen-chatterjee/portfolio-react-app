import About from "./About";
import PrimaryBtn from "../../components/Primary-btn";

function Home() {
    return (
        <div className="relative w-full">
            {/* use for background color */}
            <div className="absolute w-[871px] h-[871px] bg-[#DA4DF1] opacity-40 rounded-full -top-[70%] right-[-350px] -z-1 blur-[350px]"></div>
            {/* use for background color */}
            <div className="absolute w-[871px] h-[871px] bg-[#C4F5E9] opacity-70 rounded-full top-[18%] right-[-450px] -z-1 blur-[350px]"></div>
            {/* use for main content */}
            <div className="flex flex-row items-center mt-28 ml-48 mr-48">
                <div className="flex-col mr-36">
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
                    <div className="mt-4">
                        <PrimaryBtn
                            title="Say Hello!"
                            onBtnClick={() => console.log("dsdsd")}
                        />
                    </div>

                    <div className="flex flex-row mt-24">
                        <div className="flex bg-[#EDD8FF]/50 rounded-tl-[6px] rounded-bl-[6px] px-5 py-3 flex-col items-center w-[180px]">
                            <div className="text-[#424E60] font-semibold text-2xl mb-2">
                                15 Y.
                            </div>
                            <div className="text-[#697484] font-light text-xs">
                                Experience
                            </div>
                        </div>
                        <div className="w-[2px]"></div>
                        <div className="flex bg-[#EDD8FF]/50 px-5 py-3 flex-col items-center w-[180px]">
                            <div className="text-[#424E60] font-semibold text-2xl mb-2">
                                250+
                            </div>
                            <div className="text-[#697484] font-light text-xs">
                                Project Completed
                            </div>
                        </div>
                        <div className="w-[2px]"></div>
                        <div className="flex bg-[#EDD8FF]/50 rounded-tr-[6px] rounded-br-[6px] px-5 py-3 flex-col items-center w-[180px]">
                            <div className="text-[#424E60] font-semibold text-2xl mb-2">
                                58
                            </div>
                            <div className="text-[#697484] font-light text-xs">
                                Happy Client
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-shrink-0 w-[400px] h-[500px] bg-white shadow-2xl rounded-3xl content-center items-center justify-center overflow-hidden">
                    <img
                        className="w-full h-full object-fill"
                        src="src/assets/man.png"
                        alt="Profile image"
                    />
                </div>
            </div>

            <About />
        </div>
    );
}

export default Home;
