
import {useEffect, useState}  from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery}  from   './ImageGallery/ImageGallery';
import {LoadMoreBtn} from './Button/Button';
import {API} from './api'
import { Loader } from './Loader/Loader'

export const App = () => {
  
  const [pictures, setPictures] = useState([]);
  const [imgsSearch, setImgsSearch] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  
  useEffect(() => {
    if(imgsSearch === '')return;

      async function fetchData() {
        try{
          const newPictures = await API(imgsSearch, perPage, page);
          setPictures(prevState => [...prevState, ...newPictures]);          
        }catch(error){
          console.log('error: ', error);
          
        }
      }
      
      fetchData();
      setIsLoad(false);
    },[imgsSearch, page, perPage])

    const searchPictures = (imgName ) => {
      if(imgsSearch !== imgName){
        setImgsSearch(imgName);
        setPage(1);
        setPictures([]);  
        setIsLoad(true);
      }
    }

    const addPage = () => {
      setPage(prevState => prevState + 1)
    }
    
    return(
      <div>
        <Searchbar onSubmit={(imgName) => {searchPictures(imgName)}}/>
         <ImageGallery  images={pictures} />
        {isLoad && <Loader/>}
        
           {pictures.length !== 0 && (<LoadMoreBtn onClick={addPage}/>)}
        
      </div>
    )    
  }
  

