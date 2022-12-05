import PropTypes from "prop-types";
import {useState}  from 'react';
import {GalleryItem, GallaryImg} from './ImageGalleryItem.styled';
import{ModalWindow} from 'components/Modal/Modal'

export const ImageGalleryItem = ({ src, alt, largeImg}) => {
    const [showModal, setShowModal] = useState(false); 
    const modalToggle = () => {
        !showModal ? setShowModal(true) : setShowModal(false) 
    }
         return(
            <GalleryItem>
                <GallaryImg src={src} alt={alt} onClick={modalToggle} />
                {showModal && <ModalWindow src={largeImg} alt={alt} onClick={modalToggle}/>}
            </GalleryItem>
        )        
        
}
  
ImageGalleryItem.propTypes = {
 onClick:PropTypes.func   
}
