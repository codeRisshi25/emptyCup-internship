import type { CardData } from "../types/cardData";
import fullstart from '/fullstar.svg';
import halfstart from '/halfstar.svg';
import emptystar from '/emptystar.svg';
import shortlisted from '/Vector.svg';
import shortlist from '/shortlist.svg';

interface DisplayCardProps extends CardData {
    id: string;
    isEven: boolean;
    isShortlisted?: boolean;
    toggleShortList?: (id: string) => void;
}

const renderStars = (rating: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img key={`full-${i}`} src={fullstart} alt="Full Star"  />);
    }
    if (halfStar) {
        stars.push(<img key="half" src={halfstart} alt="Half Star" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img key={`empty-${i}`} src={emptystar} alt="Empty Star" />);
    }
    return stars;
};

const getPriceDisplay = (price: number): string => {
    if (price < 30000) return "$";
    if (price < 60000) return "$$";
    return "$$$";
}
export const DisplayCard = ({ id, name, rating, description, projects, years, price, phNumbers, isEven, isShortlisted, toggleShortList }: DisplayCardProps) => {

    const bgColor = isEven 
        ? "bg-white" 
        : "bg-gradient-to-br from-[#FFFDF5] to-[#FFFCF2]";
    const textColor = "text-gray-700"; 
    const titleColor = "text-black";
    const imageStyles = "text-[#8D4337]";
    const textStyle = "text-[#8D4337] text-[0.5rem]";

    const handleShortlistClick = () => {
        if (!toggleShortList) return;
        toggleShortList(id);
    };
    return (
        <div className={`flex w-full pl-8 py-5.5 font-Chivo ${bgColor} border-y-1 border-[#efeeeeaa]`}>
            <div className="flex-grow">
                <h2 className={`text-[1.125rem] font-semibold mb-1 ${titleColor}`}>{name}</h2>
                <div className="flex items-center mb-4 gap-1">
                    {renderStars(rating)}
                </div>
                <p className={`${textColor} pr-12 mb-6 text-[0.625rem] drop-shadow-md drop-shadow-gray-400`}>{description}</p>
                <div className="flex space-x-10 mb-5">
                    <div>
                        <p className={`text-2xl font-bold ${titleColor} text-center`}>{projects}</p>
                        <p className={`${textColor} text-xs`}>Projects</p>
                    </div>
                    <div>
                        <p className={`text-2xl font-bold ${titleColor} text-center`}>{years}</p>
                        <p className={`${textColor} text-xs`}>Years</p>
                    </div>
                    <div>
                        <p className={`text-2xl font-bold ${titleColor} text-center`}>{getPriceDisplay(price)}</p>
                        <p className={`${textColor} text-xs`}>Price</p>
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    {phNumbers.map((phone, index) => (
                        <p key={index} className={`${textColor} text-[1rem]`}>{phone}</p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-between w-25 ml-4 mb-4">
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src="/arrowDetails.svg" alt="Details" className={`${imageStyles}`} />
                    <p className={`${textStyle}`}>Details</p>
                </button>
                <button className={`flex flex-col items-center hover:opacity-75`}>
                    <img src="/eyeslash.svg" alt="Hide" className={`${imageStyles}`}  />
                    <p className={`${textStyle}`}>Hide</p>
                </button>
                <button 
                    className={`flex flex-col items-center hover:opacity-75`}
                    onClick={handleShortlistClick}
                >
                    <img 
                        src={isShortlisted ? shortlisted : shortlist} 
                        alt={isShortlisted ? "Shortlisted" : "Shortlist"} 
                        className={`${imageStyles}`}
                    />
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