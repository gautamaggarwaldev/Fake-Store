import { useNavigate } from 'react-router-dom';

const AdComponent = ({ image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Scroll to the top of the page (header)
        window.scrollTo(0, 0);
        // Optionally navigate to the homepage if needed
        navigate('/');
    };

    return (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-4 rounded-lg shadow-md animate-pulse">
            {/* Make sure the image is rendered correctly */}
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={image} // This uses the passed image prop
                alt="Special Offer"
            />
            <p className="text-lg font-bold mt-4">🔥 Special Offer! Limited Time Discount! 🔥</p>
            <p className="text-sm mt-1">Grab the best deals before they&apos;re gone!</p>
            <button
                onClick={handleClick}
                className="cursor-pointer mt-2 px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
            >
                Shop Now
            </button>
        </div>
    );
};

export default AdComponent;
