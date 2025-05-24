import { NavBar } from "./components/NavBar";
import { Options } from "./components/Options";
import { DisplayCard } from "./components/InfoTile";
import type { CardData } from "./types/cardData";
import { useState } from "react";

const cardData: CardData[] = [
	{
		id: "1",
		name: "Epic Designs",
		rating: 4.5,
		description:
			"Experienced software developer with a passion for building scalable applications.",
		projects: 10,
		years: 5,
		price: 50000,
		phNumbers: ["+91 - 984532853", "+91 - 984535853"],
	},
	{
		id: "2",
		name: "Tech Innovators",
		rating: 5,
		description:
			"Creative team specializing in web and mobile app development with a focus on user experience.",
		projects: 20,
		years: 3,
		price: 75000,
		phNumbers: ["+91 - 984532853", "+91 - 984535853"],
	},
	{
		id: "3",
		name: "CodeCrafters",
		rating: 3.5,
		description:
			"Full-stack developers with expertise in modern frameworks and cloud technologies.",
		projects: 15,
		years: 4,
		price: 60000,
		phNumbers: ["+91 - 984532853", "+91 - 984535853"],
	},
];

function App() {
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [showOnlyShortlisted, setShowOnlyShortlisted] = useState(false);

  const toggleShortList = (id: string) => {
    setShortlistedIds((prev) =>
      prev.includes(id) 
      ? prev.filter((prevId) => prevId !== id)
      : [...prev, id]
    )
    console.log("Shortlisted IDs:", shortlistedIds);
  }
  const filterToggle = () => {
    setShowOnlyShortlisted((prev) => !prev);
    console.log("Filter toggled:", !showOnlyShortlisted);
  }

  const displayCards  = showOnlyShortlisted
    ? cardData.filter((card) => shortlistedIds.includes(card.id))
    : cardData;

	return (
    <div className="font-[Chivo">
      <NavBar />
      <Options 
    isFilterActive={showOnlyShortlisted}
    onFilterToggle={filterToggle}
    />
      <div className="flex flex-col overflow-hidden">
        {displayCards.map((card, index) => {
          return (
            <DisplayCard
              key={card.id}
              {...card}
              isShortlisted={shortlistedIds.includes(card.id)}
              toggleShortList={toggleShortList}
              isEven={index % 2 !== 0}
            />
          );
        })}
      </div>
		</div>
	);
}

export default App;
