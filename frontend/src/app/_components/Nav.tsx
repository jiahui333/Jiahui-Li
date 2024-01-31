"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Nav() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('query');
        replace(`${pathname}`);
    };
    return (
        <div className='pt-8 pb-14 px-16'>
            <h1 
                className='text-2xl font-bold text-white cursor-pointer'
                onClick={handleClick}
            >
                Flickr Search
            </h1>
        </div>
    )
}