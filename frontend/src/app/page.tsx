"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

type FlickrImage = {
  media: {
    m: string;
  };
  title: string;
}

export default function Home() {
  const [images, setImages] = useState<FlickrImage[]>([]);
  const [searchTags, setSearchTags] = useState<string>('');

  useEffect(() => {
    fetchImages(searchTags);
  }, []);

  const fetchImages = async (searchTags: string) => {
    const response = await axios.get(`http://localhost:8000/api/images?tags=${searchTags}`);
    setImages(response.data);
    console.log(response.data)
  };

  const handleSearch = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchImages(searchTags);
  };

  return (
    <div>
      <div className='bg-rose-50'>
        <header className='py-8 px-16'>
          <h1 className='text-2xl font-bold'>Flickr Search</h1>
        </header>
        <search className='pb-20'>
          <form className="px-3 py-2 w-max m-auto bg-white rounded" onSubmit={handleSearch}>
            <input
              className='w-80'
              type="text"
              value={searchTags}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTags(e.target.value)}
            />
            <button type="submit">
              <FontAwesomeIcon className='text-xl text-gray-500'
                icon={faMagnifyingGlass}
              />
            </button>
          </form>
        </search>
      </div>
      <div className="grid grid-cols-3 gap-4">

        {/* Use index as key because the data does not contain a unique id itself */}
        {images.map((image, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={image.media.m} alt={image.title} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{image.title}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
