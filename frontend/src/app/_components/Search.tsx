"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react";


export default function Search() {

    const [searchTags, setSearchTags] = useState<string>('');
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch() {
        const params = new URLSearchParams(searchParams);
        if (searchTags) {
            params.set('query', searchTags);
          } else {
            params.delete('query');
          }
        replace(`${pathname}?${params.toString()}`);
      }

    return (
        <div className='p-3 w-max m-auto bg-white rounded'>
            <input
                className='w-80 outline-none'
                type="text"
                onChange={(e) => {setSearchTags(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <button 
                type="button"
                onClick={handleSearch}
            >
                <FontAwesomeIcon 
                    className='text-xl text-gray-500'
                    icon={faMagnifyingGlass}
                />
            </button>
        </div>
    )
}