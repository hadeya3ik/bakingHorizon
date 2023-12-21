import "./modal.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Modal = ({img, closeModal, nextImage, prevImage}) => {
  return (
    <div className="modal">
        <div className="exit_modal">
            <AiOutlineCloseCircle size={30} onClick={closeModal} className="exit_icon" />
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
