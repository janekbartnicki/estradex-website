import { MdKeyboardArrowUp } from "react-icons/md";

const BackAnchorBtn: React.FC = () => {
    return (
        <a href="#" className="btm-nav h-5 shadow-lg border-t border-black">
            <button>
                <MdKeyboardArrowUp className="h-8 w-8"/>
            </button>
        </a>
    )
}

export default BackAnchorBtn;