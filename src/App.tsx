import BackAnchorBtn from './components/BackAnchorBtn';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
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
            <EmailForm/>
            <Footer/>
            <BackAnchorBtn/>
        </>
    )
}

export default App