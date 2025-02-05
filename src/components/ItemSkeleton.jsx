import { Link } from "react-router-dom";

function ItemSkeleton() {
    return (
        <div>
            <Link>
                <div className="p-4 bg-white shadow-md rounded-lg animate-pulse">
                    {/* Image Placeholder */}
                    <div className="w-40 h-40 bg-gray-300 rounded-lg mx-auto"></div>

                    {/* Title Placeholder */}
                    <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>

                    {/* Price & Rating Placeholder */}
                    <div className="flex justify-between items-center w-full mt-2 px-4">
                        <div className="h-5 w-20 bg-gray-300 rounded"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-300 rounded"></div>
                            <div className="h-4 w-6 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Action Buttons Placeholder */}
            <div className="flex justify-between items-center mt-4">
                <div className="w-32 h-10 bg-gray-300 rounded-lg"></div>
                <div className="w-32 h-10 bg-gray-300 rounded-lg"></div>
            </div>
        </div>
    );
};

export default ItemSkeleton;