function PrimaryBtn({ title = "Button", onBtnClick }) {
    return (
        <button
            className="
            bg-[#A53DFF] border-[1px] border-[#A53DFF] px-5 py-3 rounded-sm text-white font-medium text-xs 
            transition delay-50 duration-200 ease-in-out 
            hover:border-purple-700 hover:-translate-y-1 hover:bg-purple-700 hover:scale-110
            active:scale-100
            "
            onClick={onBtnClick}
        >
            {title}
        </button>
    );
}

export default PrimaryBtn;
