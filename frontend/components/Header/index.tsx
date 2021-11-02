const Header = () => {
    return (
        <nav className="top-0 w-full bg-header bg-opacity-100 fixed text-white font-serif">
            <div className="grid grid-cols-12">
                <div className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="box col-span-10">
                </div>
                <div className="box">
                </div>
            </div>
        </nav>
    )
};
export default Header;