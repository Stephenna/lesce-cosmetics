import Face from "../../public/images/mainmaybe.jpg"
import Image from "next/image";



const SelectedImage = ({width, height, sub, main, name}) => {
    
    const getPictureURL = () => {
        if(sub){
            return sub;
        }
       return main
    }
    
    return (
        <Image
        loader={getPictureURL}
        className={name}
        src={Face}
        alt="Picture of the author"
        width={width}
        height={height}
      /> 
    )
}

export default SelectedImage
