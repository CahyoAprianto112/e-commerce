import { useState } from 'react';
import Img1 from "../../assets/women/dou4.png";
import Img2 from "../../assets/women/dou2.png";
import Img3 from "../../assets/women/dou8.png";
import Img4 from "../../assets/women/dou5.png";
import Img5 from "../../assets/women/dou7.png";
import Img6 from "../../assets/women/dou1.png";
import Img7 from "../../assets/women/dou3.png";
import Img8 from "../../assets/women/dou9.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "brown",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: "blue",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "indigo",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "pink",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "gray",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Coboy T-Shirt",
        rating: 4.5,
        color: "slategray",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Fashion Chinese",
        rating: 4.6,
        color: "brown-yellow",
        aosDelay: "400",
    },
    {
        id: 8,
        img: Img8,
        title: "Blazer Women",
        rating: 4.9,
        color: "cream",
        aosDelay: "600",
    },
];

const Products = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime fugiat sed.
                    </p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 group">
                        {/* Card Section */}
                        {ProductsData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                onMouseEnter={() => setHoveredId(data.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="space-y-3 transition-transform duration-300"
                                style={{ transform: hoveredId === data.id ? 'scale(1.05)' : 'scale(1)' }}
                            >
                                <img
                                    src={data.img}
                                    alt=""
                                    className="h-[320px] w-[250px] object-cover rounded-md group-hover:cursor-pointer transition-all duration-200"
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-800">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all button */}
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-primary/80">
                            View All Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
