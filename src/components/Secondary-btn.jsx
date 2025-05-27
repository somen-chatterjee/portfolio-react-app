function SecondaryBtn({ title = "Button", onBtnClick, image }) {
    return (
        <button
            className="
            flex items-center gap-2 bg-white border-[1px] border-[#A53DFF] px-5 py-3 rounded-sm text-[#A53DFF] font-medium text-xs
            transition delay-50 duration-200 ease-in-out 
            hover:text-purple-700 hover:border-purple-700 hover:-translate-y-1 hover:scale-110
            active:scale-100
            "
            onClick={onBtnClick}
        >
            {image}
            {title}
        </button>
    );
}

export default SecondaryBtn;
