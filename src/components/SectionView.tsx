import { MdKeyboardArrowRight } from "react-icons/md";

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
                    <p className="rajdhani-regular text-xl tracking-wide mt-5">{desc}</p>
                </div>
                <div className="grid place-items-center w-full sm:md:w-1/2 mt-10">
                    {children}
                </div>
            </div>
            <div className='text-right'>
                <a href="#wiadomosc">
                    <button className="btn rajdhani-semibold hover:text-white hover:bg-estradex-blue">
                        Zainteresowany? Napisz do nas <MdKeyboardArrowRight/>
                    </button>
                </a>
            </div>
        </>
    )
}
export default SectionView;