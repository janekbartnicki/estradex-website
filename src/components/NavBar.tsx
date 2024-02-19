import { MdOutlineMail } from "react-icons/md";

const NavBar: React.FC = () => {
    return (
        <div className="navbar bg-base-100 sticky z-10 top-0 shadow-lg">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Transport</a></li>
                    <li><a>Spedycja</a></li>
                    <li><a>Dystrybucja</a></li>
                    <li><a>Magazynowanie</a></li>
                </ul>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-estradex-blue" href="/#">
                    <img src="/icon-estradex.png" className="w-10"/>
                </a>
            </div>
            <div className="flex-none">
                <a href="#wiadomosc">
                    <button className="btn btn-square btn-ghost">
                        <MdOutlineMail className="w-5 h-5"/>
                    </button>
                </a>
                
            </div>
        </div>
    )
}

export default NavBar;