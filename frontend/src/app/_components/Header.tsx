import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  searchTags: string;
  handleSearch: (e:React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({searchTags, handleSearch, handleInputChange}:HeaderProps) => {
  return (
    <header className="bg-right-top" style={{ backgroundImage: "url('/top-background.jpg')" }}>
      <div className='pt-8 pb-12 px-16'>
        <h1 className='text-2xl font-bold text-white'>Flickr Search</h1>
      </div>
      <search className='pb-28'>
        <form className="px-3 py-2 w-max m-auto bg-white rounded" onSubmit={handleSearch}>
          <input
            className='w-80 outline-none'
            type="text"
            value={searchTags}
            onChange={handleInputChange}
          />
          <button type="submit">
            <FontAwesomeIcon className='text-xl text-gray-500'
              icon={faMagnifyingGlass}
            />
          </button>
        </form>
      </search>
    </header>
  )
}

export default Header