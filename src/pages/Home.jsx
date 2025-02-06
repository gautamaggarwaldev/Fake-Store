/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useId } from 'react';
import { AppContext } from '../App.jsx';
import Header from '../components/Header.jsx';
import Items from '../components/Items.jsx';
import ItemSkeleton from '../components/ItemSkeleton.jsx';
import AdComponent from '../components/AdComponent.jsx'; // ✅ Import Ad Component

const categories = [
    "men's clothing",
    "electronics",
    "women's clothing",
    "jewelery",
];

// Array of different image URLs for ads
const adImages = [
    "/assets/22.jpg",
];

function Home() {
    const appContext = useContext(AppContext);

    return (
        <>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                {categories.map((currentCategory) => {
                    return (
                        <div key={useId()} className="mb-8">
                            {/* Category Title */}
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{currentCategory}</h2>

                            {/* Loading Skeleton */}
                            {appContext.isLoading ? (
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                                    {Array(8).fill("").map((_, index) => (
                                        <ItemSkeleton key={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                                    {appContext.products?.length !== 0 ? (
                                        Object.values(appContext.products)
                                            .filter((product) => product.category === currentCategory)
                                            .map((currentProduct, index) => {
                                                return (
                                                    <React.Fragment key={currentProduct.id}>
                                                        <Items product={currentProduct} />
                                                        
                                                        {/* Insert an ad after every 4 products */}
                                                        {index % 4 === 3 && (
                                                            <AdComponent image={adImages[Math.floor(index / 4) % adImages.length]} />
                                                        )}
                                                    </React.Fragment>
                                                );
                                            })
                                    ) : (
                                        // If no products available, show message
                                        <p className="text-center text-gray-600 col-span-full">No Items Found</p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </main>
        </>
    );
};

export default Home;
