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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${API_URL}/data`);
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        const result = await response.json();
        const transformedData = result.listings.map((item: any) => ({
          ...item,
          id: item._id,
        }));
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const toggleShortList = (id: string) => {
    setShortlistedIds((prev) =>
      prev.includes(id) 
      ? prev.filter((prevId) => prevId !== id)
      : [...prev, id]
    );
  }
  
  const filterToggle = () => {
    setShowOnlyShortlisted((prev) => !prev);
  }

  const displayCards = showOnlyShortlisted
    ? data.filter((card) => shortlistedIds.includes(card.id))
    : data;

  return (
    <div className="font-[Chivo]">
      <NavBar />
      <Options 
        isFilterActive={showOnlyShortlisted}
        onFilterToggle={filterToggle}
      />
      
      {isLoading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center py-6">
          <p className="text-red-600 mb-3">{error}</p>
          <button 
        className="text-blue-600 hover:text-blue-800 underline font-medium"
        onClick={() => window.location.reload()}
          >
        Try Again
          </button>
        </div>
      )}
      
      {!isLoading && !error && displayCards.length === 0 && (
        <div className="text-center py-10">
          {showOnlyShortlisted ? 
            "No items have been shortlisted yet." :
            "No items are available at this time."
          }
        </div>
      )}
      
      {!isLoading && !error && displayCards.length > 0 && (
        <div className="flex flex-col overflow-hidden">
          {displayCards.map((card, index) => (
            <DisplayCard
              key={card.id}
              {...card}
              isShortlisted={shortlistedIds.includes(card.id)}
              toggleShortList={toggleShortList}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;