import { FaTruck } from "react-icons/fa";

import SectionView from "./SectionView";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque magnam vero consectetur dolorem est quidem aspernatur cupiditate, sequi eos reprehenderit necessitatibus praesentium perferendis ducimus quos. Expedita asperiores temporibus est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum iusto illum labore quam molestias, ex eligendi iste voluptatem sunt tempore eius sint ad? Fuga ea perspiciatis magnam libero ullam?";

const Sections: React.FC = () => {
    return (
        <>
            <SectionView 
                href="#transport"
                title="Transport"
                desc={lorem}
            >
                <FaTruck className="w-72 h-72 text-estradex-blue"/>
            </SectionView>
            <SectionView 
                href="#transport"
                title="Transport"
                desc={lorem}
                rtl
            >
                <FaTruck className="w-72 h-72 text-estradex-blue"/>
            </SectionView>
            <SectionView 
                href="#transport"
                title="Transport"
                desc={lorem}
            >
                <FaTruck className="w-72 h-72 text-estradex-blue"/>
            </SectionView>
        </>
    )
}

export default Sections;