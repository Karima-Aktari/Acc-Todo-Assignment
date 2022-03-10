import React from 'react';
import Popup from 'reactjs-popup';
import './HomePopUp.css';

const HomePopUp = () => {

    return (
        <div className="">
            <Popup
                trigger={<button className="button bg-pink-500 text-blue-200 rounded-full px-3">Read More</button>}
                modal
                nested
            >
                {(close: any) => (
                    <div className="modal container mx-auto text-center bg-black text-gray-300 pb-8">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> More About Us</div>
                        <div className="content">
                            <div className="grid grid-cols-2">
                                <div className="w-50 rounded-lg">
                                    <img src="https://www.kindpng.com/picc/m/121-1219046_img-ecommerce-multi-vendor-hd-png-download.png" className='w-full px-2 rounded-lg' alt="" />
                                </div>
                                <div className="w-50 px-5 text-center">
                                    <p className="">A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.</p>
                                </div>
                            </div>
                            {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                <img src="https://www.kindpng.com/picc/m/121-1219046_img-ecommerce-multi-vendor-hd-png-download.png" className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" alt="" width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <blockquote>
                                        <p className="text-lg font-medium">
                                            “Tailwind CSS is the only framework that I've seen scale
                                            on large teams. It’s easy to customize, adapts to any design,
                                            and the build size is tiny.”
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                        <div className="text-sky-500 dark:text-sky-400">
                                            Sarah Dayan
                                        </div>
                                        <div className="text-slate-700 dark:text-slate-500">
                                            Staff Engineer, Algolia
                                        </div>
                                    </figcaption>
                                </div>
                            </figure> */}
                        </div>
                        <div className="actions pb-3">
                            {/* <Popup
                                trigger={<button className="button bg-blue-300 px-4"> Trigger </button>}
                                position="top center"
                                nested
                            >
                                <div className=' bg-purple-400'>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                    </span>
                                </div>
                            </Popup> */}
                            <button
                                className="button bg-pink-600 text-blue-200 rounded-full text-xl font-bold px-4"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div >
    );
};

export default HomePopUp;