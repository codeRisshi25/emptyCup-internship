import gallery from "/gallery.svg";
import contacts from "/contacts.svg";
import map from "/map.svg";
import sort from "/sort.svg";
import shortlisted from "/shortlisted.svg";

interface OptionsProps {
    isFilterActive?: boolean;
    onFilterToggle?: () => void;
}

export const Options =({ isFilterActive, onFilterToggle }: OptionsProps)  => {
  return (
    <div className="flex flex-row justify-between w-full pt-6 px-6">
      <div className="flex flex-row gap-8">
        <img src={contacts} alt="Contacts" className="mb-5" />
        <img src={gallery} alt="Gallery" className="mb-5" />
        <img src={map} alt="Map" className="mb-5" />
      </div>
    <div className="flex flex-row gap-8">
      <button 
        onClick={onFilterToggle}
        className="focus:outline-none"
      >
      <img src={shortlisted} alt="Shortlisted" className={`mb-5 ${isFilterActive ? 'filter-yellow' : ''}`} />
      </button>
        <img 
        src={sort} 
        alt="Sort" 
        className="mb-5"  
        />
    </div>
    </div>
  );
};
