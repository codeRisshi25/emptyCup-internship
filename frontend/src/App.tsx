import { NavBar } from "./components/NavBar";
import { Options } from "./components/Options";
import { DisplayCard } from "./components/InfoTile";
import type { CardData } from "./types/cardData";

const cardData: CardData[] = [
	{
		_id: "1",
		name: "Epic Designs",
		rating: 4.5,
		description:
			"Experienced software developer with a passion for building scalable applications.",
		projects: 10,
		years: 5,
		price: 50000,
		phNumbers: ["123-456-7890", "987-654-3210"],
	},
	{
		_id: "2",
		name: "Tech Innovators",
		rating: 5,
		description:
			"Creative team specializing in web and mobile app development with a focus on user experience.",
		projects: 20,
		years: 3,
		price: 75000,
		phNumbers: ["555-123-4567", "555-765-4321"],
	},
	{
		_id: "3",
		name: "CodeCrafters",
		rating: 3.5,
		description:
			"Full-stack developers with expertise in modern frameworks and cloud technologies.",
		projects: 15,
		years: 4,
		price: 60000,
		phNumbers: ["111-222-3333", "444-555-6666"],
	},
];

function App() {
	return (
		<div className="font-Chivo">
			<NavBar />
			<Options />
      <div className="flex flex-col">
        {cardData.map((card, index) => {
          return (
            <DisplayCard
              key={card._id}
              _id={card._id}
              name={card.name}
              rating={card.rating}
              description={card.description}
              projects={card.projects}
              years={card.years}
              price={card.price}
              phNumbers={card.phNumbers}
              isEven={index % 2 !== 0}
            />
          );
        })}
      </div>
		</div>
	);
}

export default App;
