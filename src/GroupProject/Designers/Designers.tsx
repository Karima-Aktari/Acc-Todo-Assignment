import React, { useState } from 'react';

interface DesignersState {
    designers: {
        name: string
        rating: number
        url: string
        description: string
    }[]
}

const Designers = () => {
    const [designers, setDesigners] = useState<DesignersState["designers"]>([
        {
            name: "Jamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image3-1.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
        {
            name: "Kamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image4.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
        {
            name: "Kalim",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image1-1.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
        {
            name: "Jamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image9-1.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
        {
            name: "Kamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image5-1.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
        {
            name: "Kalim",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image6-1.jpg",
            rating: 5,
            description: "Perfect Designer ",
        },
    ]);


    return (
        <div>
            <div className='container py-16 mx-auto'>

                <div className="pb-16">
                    <h1 className='text-2xl text-center font-medium text-gray-800 uppercase mb-6'>Our Top Designer</h1>
                    <div className=' grid md:grid-cols-3 sm:grid-cols-1 gap-5'>
                        {
                            designers.map((designer) => (

                                <div className="bg-white shadow rounded overflow-hidden">
                                    <div className='relative py-2'>
                                        <img src={designer.url} alt="" className="w-full" />
                                        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>

                                            <button className='text-rose-800 text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-blue-600 transition'><i className="fa-brands fa-youtube"></i> </button>
                                            <button className='text-red-800 text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-blue-600 transition'><i className="fa-brands fa-instagram-square"></i></button>

                                        </div>
                                        <div className='pt-4 pb-3 px-4 flex content-between'>

                                            <div>
                                                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>{designer.name}</h4>
                                                <p>{designer.description}</p>
                                            </div>
                                            <div className='flex'>
                                                <div className='flex gap-1 text-yellow-400 text-sm'>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                                <div className='pb-3'>
                                                    <button className="absolute text-white bg-purple-600 px-3 py-1 mb-2 rounded-md hover:bg-purple-800">Order Now</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

            </div >
        </div>
    );
};

export default Designers;