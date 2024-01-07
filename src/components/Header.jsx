import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import LOGO from '../assets/prybertocode.png'
import LOGOWHITE from '../assets/prybertocode-white.png'




const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
         
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        // img: isScrolled ? 'LOGO': 'LOGOWHITE',

        backgroundColor: isScrolled ? 'white' : 'black',
        color: isScrolled ? 'black' : 'white',
        transition: 'background-color 0.1s ease',

    };

    const menuStyle = {
        color: isScrolled ? '#EA7637' : '#fff',

    }

    
    return (

        <header style={headerStyle} className='w-full text-white bg-white z-40 fixed top-0 pr-10 shadow-lg'>
            <div className='flex  justify-between items-center'>
                {/* LOGO */}
                <div>
                    <Link to='/'>

                        <img src={isScrolled ? LOGO : LOGOWHITE} className='scale-50' alt="LOGO" />
                    </Link>
                </div>
                {/* NAVLINKS */}
                <ul className="hidden lg:flex gap-2">
                    <li>
                        <Link to='/solutions'> OUR SOLUTIONS</Link>
                    </li>
                    <li>
                        <Link to='/about'> ABOUT US </Link>
                    </li>
                    <li>
                        <Link to='/careers'>CAREERS </Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT </Link>
                    </li>
                </ul>

                {/* HAMBURGER MENU */}


                <div  className="lg:hidden text-white cursor-pointer p-2 transition-transform duration-100 ease-in-out" onClick={toggleMenu}>
                    {isOpen ? <AiOutlineClose className=' scale-125' style={menuStyle} /> : <AiOutlineMenu className='scale-125' style={menuStyle} />}
                </div>

                <div className='flex flex-col bg-white fixed z-10 top-24 right-0 transition-all duration-500 lg:hidden'>

                    <div className={` h-screen w-screen w-min-[800px] z-10  p-3 shadow-lg ${isOpen ?'block': 'hidden'}`}>

                        <ul className="text-[--primary]  pt-16 list-none " >

                            <li className='mb-5 pl-10 pb-6 border-b-2 border-b-gray-200'>
                                <Link to='/solutions'> OUR SOLUTIONS</Link>
                            </li>
                            <li className='mb-5 pl-10 pb-6 border-b-2 border-b-gray-200 '>
                                <Link to='/about'> ABOUT US </Link>
                            </li>
                            <li className='mb-5 pl-10 pb-6 border-b-2 border-b-gray-200 '>
                                <Link to='/careers'>CAREERS </Link>
                            </li>
                            <li className='mb-5 pl-10 pb-6 border-b-2 border-b-gray-200 '>
                                <Link to='/contact'>CONTACT </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

