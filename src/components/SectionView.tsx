// import { MdKeyboardArrowRight } from "react-icons/md";

interface SectionViewProps {
    href: string;
    children: React.ReactNode;
    rtl?: boolean;
    title: string;
    desc: string;
}

const SectionView: React.FC<SectionViewProps> = ({ href, children, rtl, title, desc }) => {
    return (
        <>
            <div className="flex flex-wrap w-full lg:md:mb-20 mb-5 pt-28 text-center" dir={rtl ? 'rtl' : 'ltr'} id={href}>
                <div className="grid place-items-center w-full sm:md:w-1/2">
                    <p className="lg:md:text-6xl text-5xl text-estradex-blue rajdhani-bold">{title}</p>
                    <p className="flex justify-center items-center flex-col rajdhani-regular text-xl text-pretty">
                        {desc}
                        <a href="#wiadomosc" className="mt-5">
                            <button className="btn w-60 rajdhani-semibold bg-estradex-blue text-white hover:text-black">
                                Napisz do nas
                            </button>
                        </a>
                    </p>
                </div>
                <div className="grid place-items-center w-full sm:md:w-1/2 mt-10">
                    {children}
                </div>
            </div>
        </>
    )
}
export default SectionView;