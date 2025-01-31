import {Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";
import DropdownMenu from "../components/DropDownMenu.jsx";
import { useNavigate } from "react-router-dom";
import HeaderBiblioteca from "../components/HeaderBiblioteca.jsx";
import AddBookCard from "../components/AddBookCard.jsx";


function Biblioteca({ books }) {
  useEffect(() => {
    // Obtém o contêiner de rolagem pelo id 'scroll-container'
    const container = document.getElementById("scroll-container");

    // Verifica se o contêiner existe
    if (container) {
      // Adiciona um event listener para o evento de rolagem (wheel) no contêiner
      container.addEventListener("wheel", (e) => {
        // Aplica o efeito apenas se a largura da janela for maior que 768px
        if (window.innerWidth >= 768) {
          e.preventDefault(); // Previne o comportamento padrão da rolagem
          // Move o contêiner horizontalmente com base no valor do scroll
          container.scrollBy({
            left: e.deltaY * 1.5, // Ajusta a velocidade do scroll com um fator de 1.5
            behavior: "smooth", // Adiciona efeito suave na rolagem
          });
        }
      });
    }
  }, []); // O array vazio significa que o efeito será executado apenas uma vez (após o primeiro render)

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 overflow-hidden">

      {/* Container do logo */}
      <HeaderBiblioteca />

      {/* Container para os cards dos livros com rolagem horizontal */}


      {books.length > 0 ? (

      <div id="scroll-container" className="w-full px-6 mt-4 overflow-x-auto whitespace-nowrap flex gap-6 scrollbar-hide">
        {/* Mapeia a lista de livros e cria um card para cada um */}
        
        {books.map((book) => (
          <div
            key={book.id} // Usa o id do livro como chave única
            className="flex flex-col w-[240px] h-[475px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg">
            {/* Exibe a imagem do livro */}
            <div className="w-[200px] h-[100%] mt-4 rounded-lg overflow-hidden flex justify-center">
              <img className=" flex h-full object-cover" src={book.imagem} alt={book.title} />
            </div>

            {/* Exibe as informações do livro */}
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-2xl font-semibold break-words">{book.title}</h1>
              <h2 className="text-xl break-words">{book.autor}</h2>
              <h2 className="text-xl break-words">{book.ano}</h2>
              <h2 className="text-xl break-words">{book.genero}</h2>

              {/* Botões de ação (Excluir e Editar) */}
              <div className="flex mt-4 justify-center gap-8 mb-6">
                <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 transition">
                  <Trash2 /> {/* Ícone para excluir */}
                </button>
                <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 transition">
                  <Pencil /> {/* Ícone para editar */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      ) : (
        <AddBookCard />
      ) }

      {/* Estilos para esconder a barra de rolagem (apenas visível quando necessário) */}
      <style>
        {
          `.scrollbar-hide::-webkit-scrollbar {
            display: none; /* Esconde a barra de rolagem no navegador */
          }
          .scrollbar-hide {
            -ms-overflow-style: none; /* Para o Internet Explorer */
            scrollbar-width: none; /* Para o Firefox */
          }`
        }
      </style>
    </div>
  );
}

export default Biblioteca;