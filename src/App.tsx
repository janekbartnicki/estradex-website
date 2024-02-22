import BackAnchorBtn from './components/BackAnchorBtn';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RatingSection from './components/RatingSection';
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
                <RatingSection/>
            </div>
            <div id="wiadomosc">
                <EmailForm/>
            </div>
            <Footer/>
            <BackAnchorBtn/>
        </>
    )
}

export default App