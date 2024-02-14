import ServiceCard from './ServiceCard';

const Home: React.FC = () => {
    return (
        <div className='flex align-middle items-center justify-center'>
            <div className='container flex flex-wrap justify-center items-center gap-4'>
            <ServiceCard 
                title='Transport'
                imgRef='https://40ton.net/wp-content/uploads/2018/08/iveco_daily_72c18_5.jpg'
            />
            <ServiceCard 
                title='Spedycja'
                imgRef='https://inelo.pl/wp-content/uploads/2021/12/spedycja1.jpg'
            />
            <ServiceCard 
                title='Dystrybucja'
                imgRef='https://www.praca.pl/pressroom/poradniki/960x678/dys960.jpg'
            />
            <ServiceCard 
                title='Magazynowanie'
                imgRef='https://www.idosell.com/panel/file-gate.php?id=91175&lang=pl&ext=.png'
            />
        </div>
        </div>
    )
}

export default Home;