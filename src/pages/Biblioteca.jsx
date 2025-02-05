import { Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBiblioteca from "../components/HeaderBiblioteca.jsx";
import AddBookCard from "../components/AddBookCard.jsx";
import TitleH2 from "../components/TitleH2.jsx";


function Biblioteca({ books, deleteBook }) {

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    if (!container) return;

    const handleScroll = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (window.innerWidth >= 768) {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY * 1.5,
            behavior: "smooth",
          });
        }
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [books]); // Agora atualiza sempre que os livros mudam

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 overflow-hidden">
      <HeaderBiblioteca />

      {books.length > 0 ? (
        <div
          id="scroll-container"
          className="w-full px-6 mt-4 overflow-x-scroll whitespace-nowrap flex gap-6 scrollbar-hide"
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="flex flex-col w-[240px] h-[475px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg"
            >
              <div className="w-[200px] h-[100%] mt-4 rounded-lg overflow-hidden flex justify-center">
                <img className="flex h-full object-cover" src={book.urlImage} alt={book.title} />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <h1 className="text-2xl font-semibold break-words">{book.title}</h1>
                <TitleH2 >{book.author}</TitleH2>
                <TitleH2 >{book.year}</TitleH2>
                <TitleH2>{book.genero}</TitleH2>

                <div className="flex mt-4 justify-center gap-8 mb-6">
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 transition"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <AddBookCard />
      )}

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default Biblioteca;
