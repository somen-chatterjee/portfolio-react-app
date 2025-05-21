// About.jsx;

function About() {
    return (
        <div className="flex items-center justify-center mb-[-80px] mt-44">
            <div className="w-full h-[550px] mr-[240px] ml-[240px] px-24 bg-white shadow-2xl rounded-xl flex items-center justify-around">
                <div className="bg-[#F0F1F3] w-[320px] h-[400px] flex-shrink-0 justify-between rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-fill"
                        src="src/assets/man.png"
                        alt="Profile image"
                    />
                </div>
                <div className="flex-col ml-24">
                    <div className="text-4xl font-semibold">
                        I am Professional User <br />
                        Experience Designer
                    </div>
                    <div className="text-base font-light text-[#87909D] mt-4">
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services and
                        online stores. My passion is to design digital user
                        experiences.
                        <br />
                        <br />I design and develop services for customers
                        specializing creating stylish, modern websites, web
                        services.
                    </div>
                    <button className="bg-[#A53DFF] border-[1px] border-[#A53DFF] px-5 py-3 mt-4 mr-5 rounded-sm text-white font-medium text-xs">
                        My Project!
                    </button>

                    <button className="flex items-center gap-2 bg-white border-[1px] border-[#A53DFF] px-5 py-3 mt-4 rounded-sm text-[#A53DFF] font-medium text-xs">
                        <img
                            src="src/assets/download.svg"
                            alt="download image"
                            className="w-3 h-3"
                        />
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
