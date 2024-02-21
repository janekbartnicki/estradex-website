import BackAnchorBtn from './components/BackAnchorBtn';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Rating from './components/Rating';
import Sections from './components/Sections';
import './index.css';

const App: React.FC = () => {

    return (
        <>
            <NavBar/>
            <div className='mt-10'>
                <Home/>
            </div>
            <div className='mx-10 lg:mx-28'>
                <Sections/>
            </div>
            <div className='flex flex-col justify-center items-center my-10 mx-5' id='#opinie'>
                <p className='text-6xl rajdhani-bold mb-5 text-estradex-blue'>Opinie o nas</p>
                <Rating 
                    imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                    title="Trans.eu"
                    stars={5}
                    checkedStars={3}
                />
            </div>
            <EmailForm/>
            <Footer/>
            <BackAnchorBtn/>
        </>
    )
}

export default App