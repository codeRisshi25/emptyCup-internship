import type { CardData } from "../types/cardData";

export const DisplayCard = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Card Title</h2>
                <p className="text-gray-700 mb-4">This is a description of the card content. It provides additional information about the card.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    Action Button
                </button>
            </div>
        </div>
    );
}