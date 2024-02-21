import { MdKeyboardArrowUp } from "react-icons/md";

const BackAnchorBtn: React.FC = () => {
    return (
        <a href="#" className="btm-nav lg:md:h-5 lg:md:hover:h-10 transition-all h-10 backdrop-blur-sm bg-estradex-blue/90 hover:bg-white/30 hover:text-black text-white">
            <button>
                <MdKeyboardArrowUp className="h-8 w-8 "/>
            </button>
        </a>
    )
}

export default BackAnchorBtn;