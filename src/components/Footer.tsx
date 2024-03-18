const Footer: React.FC = () => {
    return (
        <footer className="footer footer-center p-10 bg-estradex-blue text-gray-200">
            <aside>
                <img src="/estradex-logo.png" alt="Estradex" className="h-10 invert grayscale mb-5"/>
                <p className="font-bold rajdhani-bold">
                PPHU Estradex <br/>
                </p> 
                <a href="mailto:info@estradex.pl">info@estradex.pl</a>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4">
                <div>
                    <a className="rajdhani-bold cursor-default">Trans.eu</a>
                    <p>1152138-1</p>
                </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;