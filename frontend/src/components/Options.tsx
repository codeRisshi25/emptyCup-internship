import gallery from "/gallery.svg";
import contacts from "/contacts.svg";
import map from "/map.svg";
import sort from "/sort.svg";
import shortlisted from "/shortlisted.svg";

export const Options = () => {
  return (
    <div className="flex flex-row justify-between w-full pt-6 px-6">
      <div className="flex flex-row gap-8">
        <img src={contacts} alt="Contacts" className="mb-5" />
        <img src={gallery} alt="Gallery" className="mb-5" />
        <img src={map} alt="Map" className="mb-5" />
      </div>
      <div className="flex flex-row gap-8">
        <img src={shortlisted} alt="Shortlisted" className=" mb-5" />
        <img src={sort} alt="Sort" className=" mb-5" />
      </div>
    </div>
  );
};
