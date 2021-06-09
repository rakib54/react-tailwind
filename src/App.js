import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=21995949-efbbe06030fec74724816b21e&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])

  return (
    <div className="container mx-auto">

      <ImageSearch searchText={(text) => setTerm(text)} />

      {
        !isLoading && images.length === 0 && <h1 className="text-4xl text-red-600 text-center mx-auto mt-32 ">Image not Found !</h1>
      }
      {isLoading ? <h1 className="text-5xl text-center mx-auto mt-32">Loading</h1> :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center gap-4 mt-10">
          {
            images.map((image) => <ImageCard key={image.id} image={image}></ImageCard>)
          }
        </div>
      }
    </div>
  );
}

export default App;
