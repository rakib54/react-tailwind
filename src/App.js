import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

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
      .catch(err =>console.log(err))
  }, [])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap4">
        {
          images.map((image) => <ImageCard key={image.id} image={image}></ImageCard>)
        }
      </div>
    </div>
  );
}

export default App;
