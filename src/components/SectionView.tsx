interface SectionViewProps {
    href: string;
    children: React.ReactNode;
    rtl?: boolean;
    title: string;
    desc: string;
}

const SectionView: React.FC<SectionViewProps> = ({ href, children, rtl, title, desc }) => {
    return (
        <div className="flex flex-wrap w-full mb-20 pt-28" dir={rtl ? 'rtl' : 'ltr'} id={href}>
            <div className="grid place-items-center w-full sm:md:w-1/2">
                <p className="text-6xl text-estradex-blue rajdhani-bold">{title}</p>
                <p className="rajdhani-regular text-xl tracking-wide mt-5">{desc}</p>
            </div>
            <div className="grid place-items-center w-full sm:md:w-1/2">
                {children}
            </div>
        </div>
    )
}
export default SectionView;