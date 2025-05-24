import { NavBar } from "./components/NavBar";
import { Options } from "./components/Options";
import { DisplayCard } from "./components/InfoTile";
import type { CardData } from "./types/cardData";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function App() {
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [showOnlyShortlisted, setShowOnlyShortlisted] = useState(false);
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/data`);
        const result = await response.json();
        const transformedData = result.listings.map((item: any) => ({
          ...item,
          id: item._id,
        }));
        setData(transformedData);
        console.log("Fetched data:", result.listings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

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

  const displayCards = showOnlyShortlisted
    ? data.filter((card) => shortlistedIds.includes(card.id))
    : data;

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
