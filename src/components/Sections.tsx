import { FaTruck, FaWarehouse } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";

import SectionView from "./SectionView";

const Sections: React.FC = () => {

    const iconsClassName = 'lg:md:w-72 ld:md:h-72 w-60 h-60 text-estradex-blue';

    return (
        <>
            <SectionView 
                href="#transport"
                title="Transport"
                desc={
                    "Witajcie w świecie efektywnego transportu! Estradex oferuje szybkie i bezpieczne usługi transportowe, które doskonale spełnią Wasze oczekiwania. Nasz doświadczony zespół profesjonalistów zadba o płynność dostaw, gwarantując terminowość i bezpieczeństwo przewożonych towarów. Wybierając Estradex, inwestujecie w partnera, który dostarczy Wasze produkty dokładnie tam, gdzie są potrzebne, z pełnym zachowaniem standardów bezpieczeństwa"
                }
            >
                <FaTruck className={iconsClassName}/>
            </SectionView>
            <SectionView 
                href="#spedycja"
                title="Spedycja"
                desc={
                    "Estradex to nie tylko transport, to kompleksowa obsługa spedycyjna dostosowana do unikalnych potrzeb Waszej firmy. Nasze nowoczesne podejście do logistyki, wsparte zaawansowanymi technologiami, gwarantuje efektywność i transparentność w obszarze spedycji. Z nami możecie być pewni, że Wasze przesyłki są w najlepszych rękach, a my dbamy o precyzyjne i profesjonalne zarządzanie każdym etapem dostawy"
                }
                rtl
            >
                <BsBoxes className={iconsClassName}/>
            </SectionView>
            <SectionView 
                href="#dystrybucja"
                title="Dystrybucja"
                desc={
                    "Estradex oferuje kompleksowe rozwiązania dystrybucyjne, dostosowane do unikalnych wymagań Waszego biznesu. Nasz zespół ekspertów dba o to, aby Wasze produkty trafiały do klientów zgodnie z planem. Wspólnie z nami przyspieszcie rozwój Waszej firmy, korzystając z elastycznych i profesjonalnych usług dystrybucyjnych"
                }
            >
                <HiMiniArrowsPointingOut className={iconsClassName}/>
            </SectionView>
            <SectionView 
                href="#magazynowanie"
                title="Magazynowanie"
                desc={
                    "Nasze nowoczesne magazyny gwarantują bezpieczeństwo i prawidłowe przechowywanie produktów, zgodnie z najwyższymi standardami. Dzięki indywidualnemu podejściu do każdego klienta, Estradex staje się nie tylko dostawcą, ale także partnerem, który zapewni Wam spokój i pewność, że Wasze produkty są w najlepszych rękach"
                }
                rtl
            >
                <FaWarehouse className={iconsClassName}/>
            </SectionView>
        </>
    )
}

export default Sections;