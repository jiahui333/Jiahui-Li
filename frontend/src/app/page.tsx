"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./_components/Header";
import ImagesDisplay from './_components/ImagesDisplay';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setSearchTags(e.target.value) 
  }

  return (
    <div>
      <Header searchTags={searchTags} handleSearch={handleSearch} handleInputChange={handleInputChange}/>
      <main className='p-16'>
        <ImagesDisplay images={images}/>
      </main>
    </div>
  );
};
