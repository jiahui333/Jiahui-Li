import Search from '@/app/_components/Search';
import Nav from '@/app/_components/Nav';
import ImagesDisplay from '@/app/_components/ImagesDisplay';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div>
      <header className="bg-right-top h-72" style={{ backgroundImage: "url('/top-background.jpg')" }}>
        <Nav />
        <Search />
      </header>
      <main className='p-16'>
        <Suspense key={query} fallback={<Loading />}>
          <ImagesDisplay query={query}/>
        </Suspense>
      </main>
    </div>
  );
};
