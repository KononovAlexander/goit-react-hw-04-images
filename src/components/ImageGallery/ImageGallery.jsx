import PropTypes from "prop-types";
import {Gallery} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {
    
   return (<Gallery>
         { images.map(({id, webformatURL, tags, largeImageURL}) => (
             <ImageGalleryItem 
                key={id} 
                src={webformatURL} 
                alt={tags} 
                largeImg={largeImageURL}/>
            ))}

      </Gallery>)
}

  ImageGallery.propTypes = {
    images:PropTypes.arrayOf(PropTypes.object)
  }


  
