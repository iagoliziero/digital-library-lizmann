import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

 function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="absolute right-2 md:right-[80px] lg:right-[150px] xl:right-[300px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-transparent rounded-md"
      >
       <Menu className="text-brown w-14 h-10 md:h-14" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg flex justify-center">
          <ul className="py-2">
            <li>
              <button
                className="block p-5 text-xl hover:bg-gray-100  decoration-brown-700 underline underline-offset-[10px] decoration-brown decoration-[3px]"
              >
                Minha Biblioteca
              </button>
            </li>
            <li>
              <button
              onClick={() => navigate(`/adicionarbooks`) }
                className=" block p-5 text-xl hover:bg-gray-100 decoration-brown-700 underline underline-offset-[10px] decoration-brown decoration-[3px]"
              >
                Adicionar Livros
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;