// import { primary_color, grey } from "../../constants/color";

function Process() {
    return (
        <div className="flex flex-row items-center justify-around min-h-screen bg-[#F0F1F3] gap-[100px] pt-28 pl-60 pr-60">
            <div className="flex flex-col items-start gap-3 w-2xl">
                <div className="text-3xl font-semibold">Work Process</div>
                <div className="text-[#697484] tracking-wide font-light text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non, laoreet imperdiet
                    orci. Mauris ultrices eget lorem ac vestibulum. Suspendis
                    imperdiet,
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non.
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="relative -top-6 flex flex-col items-start bg-white shadow-2xs gap-1.5 p-6 rounded-xl">
                    <div className="bg-[#EDD8FF]/50 p-5 rounded-[6px] mb-4">
                        <img
                            className=""
                            src="src/assets/linkdin.svg"
                            alt="facebook image"
                        />
                    </div>

                    <div className="text-[#132238] text-[16px] font-semibold">
                        1. Research
                    </div>
                    <div className="text-[#697484] font-light text-[13px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu.
                    </div>
                </div>

                <div className="flex flex-col items-start bg-white shadow-2xs gap-1.5 p-6 rounded-xl">
                    <div className="bg-[#EDD8FF]/50 p-5 rounded-[6px] mb-4">
                        <img
                            className=""
                            src="src/assets/linkdin.svg"
                            alt="facebook image"
                        />
                    </div>

                    <div className="text-[#132238] text-[18px] font-medium">
                        2. Analyze
                    </div>
                    <div className="text-[#697484] font-light text-[13px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu.
                    </div>
                </div>

                <div className="relative -top-6 flex flex-col items-start bg-white shadow-2xs gap-1.5 p-6 rounded-xl">
                    <div className="bg-[#EDD8FF]/50 p-5 rounded-[6px] mb-4">
                        <img
                            className=""
                            src="src/assets/linkdin.svg"
                            alt="facebook image"
                        />
                    </div>

                    <div className="text-[#132238] text-[18px] font-medium">
                        3. Design
                    </div>
                    <div className="text-[#697484] font-light text-[13px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu.
                    </div>
                </div>

                <div className="flex flex-col items-start bg-white shadow-2xs gap-1.5 p-6 rounded-xl">
                    <div className="bg-[#EDD8FF]/50 p-5 rounded-[6px] mb-4">
                        <img
                            className=""
                            src="src/assets/linkdin.svg"
                            alt="facebook image"
                        />
                    </div>

                    <div className="text-[#132238] text-[18px] font-medium">
                        2. Launch
                    </div>
                    <div className="text-[#697484] font-light text-[13px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;
