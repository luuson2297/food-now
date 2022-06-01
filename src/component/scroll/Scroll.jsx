import "../scroll/Scroll.scss";
import { useScrollTo } from 'react-use-window-scroll';



const Scroll  = () => {
    const scrollTo = useScrollTo();
    if(scrollTo.length )
    return (     
        <div className="scroll-to-top">   
      <button className="fas fa-arrow-up" onClick={() => scrollTo({ top: 0,  left: 0, behavior: 'smooth' })}/>      
          </div>  
    );
}

export default Scroll;