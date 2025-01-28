import { BookOpenText, Menu, Pencil, Trash2 } from "lucide-react";


function Biblioteca({books}) {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-gray-200 overflow-">
        <div>
          <div className="flex justify-center space-x-20">
            <img
              className="w-[100px] md:w-[125px] mt-8 relative left-14 md:left-16"
              src="src/assets/logo-lizmann.png"
              alt="logo lizmann"
            />
            <div className=" flex items-center justify-end relative left-7 md:left-32">
              <button>
                <Menu size={44} strokeWidth={2.75} />
              </button>
            </div>
          </div>
          {/* cards */}
          <div className="flex gap-4">
            {books.map((books) => (
              
              <div key={books.id}
              className="flex w-[260px] space-y-4 h-[475px] border-solid border-2 rounded-2xl border-zinc-500 flex-col items-center  text-center mt-[125px] bg-slate-100">
                <div className="flex space-y-4 h-[200px]  rounded-2xl flex-col items-center text-center mt-[20px]"> <img className="max-h-[200px] rounded-lg" src={books.imagem} alt="Imagem livro" /></div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">
                    {books.title}  </h1>
                  <h2 className="text-xl flex "> {books.autor} </h2>
                  <h2 className="text-xl flex mb-1"> {books.ano} </h2>
                  <h2 className="text-xl flex">
                    {books.genero}
                  </h2>
                  <div className="flex mt-3 space-x-9">
                    <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 ease-out duration-300">
                      <Trash2 />
                    </button>
                    <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 ease-out duration-300">
                      <Pencil />
                    </button>
                  </div>
                </div>
              </div>
            ) )}
          </div>
          {/* cards */}
        </div>
      </div>
    </div>
  );
}

export default Biblioteca;
