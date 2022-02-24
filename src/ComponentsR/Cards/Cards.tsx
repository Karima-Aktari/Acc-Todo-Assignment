import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface ProductState {
    products: {
        name: string
        age: number
        url: string
        note: string
    }[]
}

const Cards = () => {
    const [products, setProducts] = useState<ProductState["products"]>([
        {
            name: "Jamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image3-1.jpg",
            age: 65,
            note: "I am ok",
        },
        {
            name: "Kamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image4.jpg",
            age: 55,
            note: "I am ok",
        },
        {
            name: "Kalim",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image1-1.jpg",
            age: 45,
            note: "I am ok",
        },
        {
            name: "Jamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image9-1.jpg",
            age: 65,
            note: "I am ok",
        },
        {
            name: "Kamil",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image5-1.jpg",
            age: 55,
            note: "I am ok",
        },
        {
            name: "Kalim",
            url: "https://template.annimexweb.com/diva/assets/images/product-images/product-image6-1.jpg",
            age: 45,
            note: "I am ok",
        },
    ]);


    return (
        <div>
            <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
                <div className=" container mx-auto grid grid-cols-4 gap-2">
                    {
                        products.map((product) => (
                            <div className=" py-3">
                                <div key={product.name} className=" w-50 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl" >
                                    <img className="h-40 w-full object-cover rounded-xl items-center" src={product.url} alt="" />
                                    <div className="p-2">
                                        <h1 className="font-bold text-lg">{product.name}</h1>
                                        <p className="text-sm text-gray-600">{product.note}</p>
                                    </div>
                                    <div>
                                        <button type="button" className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>

            <div className='container py-16  mx-auto'>


                <div className="pb-16">
                    <h1 className='text-2xl justify-center font-medium text-gray-800 uppercase mb-6'>Top new Product</h1>
                    <div className=' grid grid-cols-4 gap-5'>
                        {
                            products.map((product) => (

                                <div className="bg-white shadow rounded overflow-hidden">
                                    <div className='relative'>
                                        <img src={product.url} alt="" className="w-full" />
                                        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>

                                            <button className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>P-1 </button>
                                            <button className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>P-2 </button>

                                        </div>
                                        <div className='pt-4 pb-3 px-4'>
                                            {/* <Link to="/">
                                            <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>Guyer Chair</h4>
                                        </Link> */}

                                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                                <p className='text-xl text-primary-400 font-semibold'>$45.00</p>
                                                <p className='text-sm text-gray-400 line-through'> $55.00</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='flex gap-1 text-yellow-400 text-sm'>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
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

export default Cards;