import PropTypes from 'prop-types';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { useState, useEffect } from 'react';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#"
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
];

const Navbar = ({ handleOrderPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleScroll = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMenuOpen]);

    return (
        <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
            {/* upper Navbar */}
            <div className="bg-primary/40 py-2 sm:block">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="w-10" />
                            Shoptopia
                        </a>
                    </div>

                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* order button */}
                        <button
                            onClick={() => handleOrderPopup()}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-1 rounded-full flex items-center gap-1 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">
                                Order
                            </span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* Darkmode Switch */}
                        <div>
                            <DarkMode />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="sm:hidden text-2xl text-gray-600 dark:text-white"
                        >
                            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>
            </div>

            {/* lower Navbar */}
            <div className={`bg-white dark:bg-gray-900 shadow-md ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                <div className="container mx-auto px-4">
                    <ul className={`flex ${isMenuOpen ? 'flex-col' : 'justify-center'} items-center gap-4 ${isMenuOpen ? 'py-10' : 'py-0'} text-[14px] ${isMenuOpen ? 'mb-4' : ''}`}>
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className="inline-block px-4 hover:text-primary duration-200"
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}

                        {/* Simple Dropdown and Links */}
                        <li className="group relative cursor-pointer">
                            <a href="#" className="flex items-center gap-[2px] py-2">
                                Trending Products
                                <span>
                                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                </span>
                            </a>
                            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 dark:text-white p-2 shadow-md">
                                <ul>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={data.link}
                                                className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;



// ini yg original
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCaretDown } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import DarkMode from "./DarkMode";

// const Menu = [
//     {
//         id: 1,
//         name: "Home",
//         link: "/#",
//     },
//     {
//         id: 2,
//         name: "Top Rated",
//         link: "/#services",
//     },
//     {
//         id: 3,
//         name: "Kids Wear",
//         link: "/#",
//     },
//     {
//         id: 3,
//         name: "Mens Wear",
//         link: "/#",
//     },
//     {
//         id: 3,
//         name: "Electronics",
//         link: "/#",
//     },
// ];

// const DropdownLinks = [
//     {
//         id: 1,
//         name: "Trending Products",
//         link: "/#",
//     },
//     {
//         id: 2,
//         name: "Best Selling",
//         link: "/#",
//     },
//     {
//         id: 3,
//         name: "Top Rated",
//         link: "/#",
//     },
// ];

// const Navbar = () => {
//     return (
//         <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//             {/* upper Navbar */}
//             <div className="bg-primary/40 py-2 relative w-full">
//                 <div className="container flex justify-between items-center">
//                     <div>
//                         <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//                             <img src={Logo} alt="Logo" className="w-10" />
//                             Shoptopia
//                         </a>
//                     </div>

//                     {/* search bar */}
//                     <div className="flex justify-between items-center gap-4">
//                         <div className="relative group hidden sm:block">
//                             <input
//                                 type="text"
//                                 placeholder="search"
//                                 className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//                             />
//                             <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//                         </div>

//                         {/* order button */}
//                         <button
//                             onClick={() => alert("Odering not avaible yet")}
//                             className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//                         >
//                             <span className="group-hover:block hidden transition-all duration-200">
//                                 Order
//                             </span>
//                             <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                         </button>

//                         {/* Darkmode Switch */}
//                         <div>
//                             <DarkMode />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* lower Navbar  */}
//             <div data-aos="zoom-in" className="flex justify-center">
//                 <ul className="sm:flex hidden items-center gap-4">
//                     {Menu.map((data) => (
//                         <li key={data.id}>
//                             <a
//                                 href={data.link}
//                                 className="inline-block px-4 hover:text-primary duration-200"
//                             >
//                                 {data.name}
//                             </a>
//                         </li>
//                     ))}

//                     {/* Simple Dropdown and Links */}
//                     <li className="group relative cursor-pointer">
//                         <a href="#" className="flex items-center gap-[2px] py-2">
//                             Trending Products
//                             <span>
//                                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                             </span>
//                         </a>
//                         <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                             <ul>
//                                 {DropdownLinks.map((data) => (
//                                     <li key={data.id}>
//                                         <a
//                                             href={data.link}
//                                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                                         >
//                                             {data.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar
