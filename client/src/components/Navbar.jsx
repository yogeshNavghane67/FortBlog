import { assets } from "../assets/assets"
import { useAppContext } from "../context/AppContext";

const Navbar = () => {

    const {navigate} = useAppContext();

    return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
        <img onClick={()=>navigate('/')} src={assets.logo} alt="" className="w-32 sm:w-44 cursor-pointer" />
       
    </div>
  )
}

export default Navbar