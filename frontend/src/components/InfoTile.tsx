import type { CardData } from "../types/cardData";
import fullstart from '/fullstar.svg';
import halfstart from '/halfstar.svg';
import emptystar from '/emptystar.svg';
import shortlisted from '/Vector.svg';

interface DisplayCardProps extends CardData {
    isEven: boolean;
}

const renderStars = (rating: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img key={`full-${i}`} src={fullstart} alt="Full Star" className="h-5 w-5" />);
    }
    if (halfStar) {
        stars.push(<img key="half" src={halfstart} alt="Half Star" className="h-5 w-5" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img key={`empty-${i}`} src={emptystar} alt="Empty Star" className="h-5 w-5" />);
    }
    return stars;
};

const getPriceDisplay = (price: number): string => {
    if (price < 30000) return "$";
    if (price < 60000) return "$$";
    return "$$$";
}

export const DisplayCard = ({ name, rating, description, projects, years, price, phNumbers, isEven }: DisplayCardProps) => {
    const bgColor = isEven ? "bg-white" : "bg-[#FFFCF2]";
    const textColor = "text-gray-700"; 
    const titleColor = "text-black";
    const imageStyles = "text-[#8D4337]";
    const textStyle = "text-[#8D4337] text-[0.5rem]";

    return (
        <div className={`flex w-full p-6 ${bgColor}`}>
            <div className="flex-grow">
                <h2 className={`text-2xl font-bold mb-2 ${titleColor}`}>{name}</h2>
                <div className="flex items-center mb-3">
                    {renderStars(rating)}
                </div>
                <p className={`${textColor} mb-4 text-sm`}>{description}</p>
                <div className="flex space-x-8 mb-4">
                    <div>
                        <p className={`text-2xl font-bold ${titleColor}`}>{projects}</p>
                        <p className={`${textColor} text-xs`}>Projects</p>
                    </div>
                    <div>
                        <p className={`text-2xl font-bold ${titleColor}`}>{years}</p>
                        <p className={`${textColor} text-xs`}>Years</p>
                    </div>
                    <div>
                        <p className={`text-2xl font-bold ${titleColor}`}>{getPriceDisplay(price)}</p>
                        <p className={`${textColor} text-xs`}>Price</p>
                    </div>
                </div>
                <div>
                    {phNumbers.map((phone, index) => (
                        <p key={index} className={`${textColor} text-sm`}>{phone}</p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-around w-24 ml-4">
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src="/arrowDetails.svg" alt="Details" className={`${imageStyles}`} />
                    <p className={`${textStyle}`}>Details</p>
                </button>
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src="/eyeslash.svg" alt="Hide" className={`${imageStyles}`}  />
                    <p className={`${textStyle}`}>Hide</p>
                </button>
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src={shortlisted} alt="Shortlisted" className={`${imageStyles}`}  />
                    <p className={`${textStyle}`}>Shortlist</p>
                </button>
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src="/exclamation.svg" alt="Report" className={`${imageStyles}`} />
                    <p className={`${textStyle}`}>Report</p>
                </button>
            </div>
        </div>
    );
}