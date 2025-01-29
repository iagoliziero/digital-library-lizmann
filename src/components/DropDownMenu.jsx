import { useState } from "react";
import { Menu } from "lucide-react";

 function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-2 md:right-12 lg:right-16 xl:right-36">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-transparent rounded-md"
      >
       <Menu className="text-brown" size={44} strokeWidth={2.75}/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg text-center">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block p-5 text-xl hover:bg-gray-100  decoration-brown-700 underline underline-offset-[10px] decoration-brown decoration-[3px]"
              >
                Minha Biblioteca
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-5 text-xl hover:bg-gray-100 decoration-brown-700 underline underline-offset-[10px] decoration-brown decoration-[3px]"
              >
                Adicionar Livros
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;