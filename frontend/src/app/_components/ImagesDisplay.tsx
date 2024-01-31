type FlickrImage = {
    media: {
      m: string;
    };
    title: string;
  }

export default async function ImagesDisplay({
  query,
}: {
  query: string;
}) {

  async function getImages() {
    const res = await fetch(`http://localhost:8000/api/images?tags=${query}`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
  const images:FlickrImage[] = await getImages();
   
  return (
    <div className="lg:columns-4 md:columns-3 sm:columns-2">
      {/* Use index as key because the data does not contain a unique id itself */}
      {images.map((image, index) => (
        <div className="relative mb-4" key={index}>
          <img className="w-full rounded-sm transition-opacity duration-500" src={image.media.m} alt={image.title} />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-end p-2 opacity-0 hover:opacity-100">
            <p className="text-white">{image.title}</p>
          </div>
        </div>
      ))}
  </div>
  )
}