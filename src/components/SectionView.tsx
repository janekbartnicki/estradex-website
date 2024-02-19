interface SectionViewProps {
    href: string;
    children: React.ReactNode;
    rtl?: boolean;
    title: string;
    desc: string;
}

const SectionView: React.FC<SectionViewProps> = ({href, children, rtl, title, desc}) => {
    return (
        <div className="flex flex-wrap w-full lg:mx-20 mx-5" dir={rtl ? 'rtl' : 'ltr'} id={href}>
            <div className="grid place-items-center w-full sm:md:w-1/2">
                <p className="text-6xl text-estradex-blue rajdhani-bold">{title}</p>
                <p>{desc}</p>
            </div>
            <div className="grid place-items-center w-full sm:md:w-1/2">
                {children}
            </div>
        </div>
    )
}
export default SectionView;