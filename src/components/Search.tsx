import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searchpart() {
  return (
    <div className="sticky left-10 top-0 py-[10px] w-[85%] md:w-fit lg:w-fit h-fit z-[50]">
      <div className="bg-[#2d2d2d] border rounded flex items-center px-[10px] w-full lg:w-[250px]">
        <FontAwesomeIcon className="h-[15px]" icon={faSearch} />
        <input
          placeholder="Search"
          className="bg-transparent h-[40px] text-xs text-[#a1a2a4] placeholder-[#a1a2a4] px-[10px] outline-0"
        />
      </div>
    </div>
  );
}
