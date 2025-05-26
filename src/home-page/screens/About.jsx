// About.jsx;

function About() {
    return (
        <div className="flex items-center justify-center mb-[-80px] mt-44">
            <div className="w-full mr-[240px] ml-[240px] px-24 pt-20 pb-32 bg-white shadow-xl rounded-xl flex items-center justify-around">
                <div className="relative">
                    <div className="bg-[#F0F1F3] w-[320px] h-[400px] flex-shrink-0 justify-between rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-fill"
                            src="src/assets/man.png"
                            alt="Profile image"
                        />
                    </div>

                    <div className="absolute flex -bottom-7 left-1/2 -translate-x-1/2 bg-white rounded-[4px] shadow-xl p-2.5">
                        <button className="w-[40px] h-[40px] mx-1 flex items-center justify-center">
                            <img
                                className=""
                                src="src/assets/facebook.svg"
                                alt="facebook image"
                            />
                        </button>
                        <button className="w-[40px] h-[40px] mx-1 flex items-center justify-center">
                            <img
                                className=""
                                src="src/assets/insta.svg"
                                alt="facebook image"
                            />
                        </button>
                        <button className="w-[40px] h-[40px] mx-1 flex items-center justify-center">
                            <img
                                className=""
                                src="src/assets/linkdin.svg"
                                alt="facebook image"
                            />
                        </button>
                        <button className="w-[40px] h-[40px] mx-1 flex items-center justify-center">
                            <img
                                className=""
                                src="src/assets/github.svg"
                                alt="facebook image"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex-col ml-24">
                    <div className="text-4xl font-semibold">
                        I am Professional User <br />
                        Experience Designer
                    </div>
                    <div className="text-sm font-light text-[#87909D] mt-4">
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services and
                        online stores. My passion is to design digital user
                        experiences.
                        <br />
                        <br />I design and develop services for customers
                        specializing creating stylish, modern websites, web
                        services.
                    </div>
                    <div className="flex">
                        <button className="bg-[#A53DFF] border-[1px] border-[#A53DFF] px-5 py-3 mt-4 mr-5 rounded-sm text-white font-medium text-xs">
                            My Project!
                        </button>

                        <button className="flex items-center gap-2 bg-white border-[1px] border-[#A53DFF] px-5 py-3 mt-4 rounded-sm text-[#A53DFF] font-medium text-xs">
                            <img
                                src="src/assets/download.svg"
                                alt="download image"
                                className="w-4 h-4"
                            />
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
