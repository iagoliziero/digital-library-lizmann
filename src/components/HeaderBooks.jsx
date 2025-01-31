import { ArrowLeft } from "lucide-react";
import DropdownMenu from "./DropDownMenu";
import { useNavigate } from "react-router-dom";


function HeaderBooks() {
    const navigate = useNavigate()
    return (
        <div className="w-full flex justify-center items-center py-6 ">
    {/* arrow to go out */}
        <div className="absolute left-2 md:left-[80px] lg:left-[150px] xl:left-[300px]">
        <button
        onClick={() => navigate(`/biblioteca`) } >
        <ArrowLeft className=" w-14 h-10 md:h-14 text-brown hover:scale-105 transition " />
          </button>
        </div>
        {/* Imagem do logo */}
        <img
          className="w-[100px] md:w-[125px]"
          src="src/assets/logo-lizmann.png"
          alt="logo lizmann"
        />
        {/* Botão do menu */}
        <DropdownMenu  />
      </div>
    )
}
export default HeaderBooks;