import ServiceCard from './ServiceCard';

const Home: React.FC = () => {
    return (
        <>
            <div className='flex align-middle justify-center mb-16 mx-5'>
                <img src="/estradex-logo.png" alt="Estradex" className='h-40'/>
            </div>
            <div className='flex align-middle items-center justify-center mx-5 my-10'>           
                <div className='container flex flex-wrap justify-center items-center gap-4'>
                    <ServiceCard 
                        title='Transport'
                        imgRef='https://40ton.net/wp-content/uploads/2018/08/iveco_daily_72c18_5.jpg'
                    />
                    <ServiceCard 
                        title='Spedycja'
                        imgRef='https://dla-przewoznika.pl/wp-content/uploads/2021/07/przewoznik-spedycja-roznice-1250x700.jpg'
                    />
                    <ServiceCard 
                        title='Dystrybucja'
                        imgRef='https://crn.pl/wp-content/uploads/2021/09/otwarcie-debata-channel-award-dystrybucja-it.jpg'
                    />
                    <ServiceCard 
                        title='Magazynowanie'
                        imgRef='https://www.idosell.com/panel/file-gate.php?id=91175&lang=pl&ext=.png'
                    />
                </div>
            </div>
        </>
    )
}

export default Home;

//TODO: Eventually remove imgRef tag from both tag and component