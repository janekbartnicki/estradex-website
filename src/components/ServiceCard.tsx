import { IoArrowForward } from "react-icons/io5";

interface ServiceCardProps {
    title: string;
    imgRef: string;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgRef, href }) => {

    const handleClickScroll = (): void => {
        const element = document.getElementById(href);

        element?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="w-96 item">
            <a href={href} onClick={handleClickScroll} className="group relative block bg-black rounded-md shadow-lg">
            <img
                alt={title}
                src={imgRef}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 saturate-50 rounded-md"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-estradex-blue rajdhani-semibold">Estradex</p>
                <p className="text-xl font-bold text-white sm:text-2xl rajdhani-bold uppercase">{title}</p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            Sprawdź naszą ofertę
                            <IoArrowForward/>
                        </p>
                    </div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default ServiceCard;