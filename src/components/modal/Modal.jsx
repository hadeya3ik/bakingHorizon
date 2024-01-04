import "./modal.css"
import { useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({img, closeModal, nextImage, prevImage}) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      } 
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };}, [nextImage, prevImage]);
  
  return (
    <div className="modal">
        <div className="exit_modal" >
            <IoCloseOutline size={30} onClick={closeModal} className="exit_icon" />
        </div>
        <div className="image_display" >
           <IoIosArrowRoundBack size={40} onClick={prevImage} className="left_arrow"/>
           <img src={img}/>
           <IoIosArrowRoundForward size={40} onClick={nextImage} className="right_arrow"/> 
        </div>
    </div>
  )
}

export default Modal
