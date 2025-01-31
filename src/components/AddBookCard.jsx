import {CirclePlus,Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddBookCard () {
  const navigate = useNavigate()

return ( 
<div
        className="flex flex-col w-[240px] mt-4 h-[475px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg">
        {/* Icone para Adicionar*/}
        <button
        onClick={() => navigate(`/adicionarbooks`)}
        className="w-[200px] h-[100%] mb-14 mt-14 rounded-lg overflow-hidden flex justify-center">
         <Plus size={120} strokeWidth={2.75} className="text-brown" />
        </button>

        {/* Exibe as informações do livro */}
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-2xl font-semibold break-words hover:text-brown hover:underline hover:underline-offset-4">Adicione seu Livro</h1>
          <h2 className="text-xl break-words">Autor</h2>
          <h2 className="text-xl break-words">Ano de Lançamento</h2>
          <h2 className="text-xl break-words">Gênero</h2>

          
          <div className="flex  justify-center items-center m-4">
            <button 
            onClick={() => navigate(`/adicionarbooks`)}
            className="w-14 bg-brown text-slate-100  p-4 h-14 rounded-lg hover:scale-105 transition">
             <CirclePlus /> {/* Ícone para Adicionar */}
            </button>
         </div>
        </div>
      </div>
)
}

export default AddBookCard; 