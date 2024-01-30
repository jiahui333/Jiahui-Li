type FlickrImage = {
    media: {
      m: string;
    };
    title: string;
  }

type ImagesDisplayProps = {
    images: FlickrImage[];
}

const ImagesDisplay = ({images}: ImagesDisplayProps) => {
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

export default ImagesDisplay;