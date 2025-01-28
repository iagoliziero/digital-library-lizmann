import { BookOpenText, Pencil, Trash2 } from "lucide-react";

function Biblioteca() {
  return (
    <div>
      <div className="h-screen bg-gray-200 bg-cover bg-center bg-no-repeat flex justify-center">
        <div>
          <div className="flex justify-center gap-1">
            <img
              className="w-[100px] md:w-[125px] mt-8"
              src="src/assets/logo-lizmann.png"
              alt="logo lizmann"
            />
          </div>
          {/* cards */}
          <div>
            <div
             className="flex w-[250px] space-y-4 h-[475px] border-solid border-2 rounded-2xl border-zinc-500 flex-col items-center  text-center mt-[125px] bg-slate-100">
              <div
               className="flex w-[200px] space-y-4 h-[200px]  rounded-2xl flex-col items-center text-center mt-[20px] bg-gray-300"></div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold"> Nome do livro </h1>
                <h2 className="text-xl flex "> Autor </h2>
                <h2 className="text-xl flex mb-1"> 2025 </h2>
                <h2 className="flex gap-1"> <BookOpenText /> <BookOpenText /> <BookOpenText /> <BookOpenText /> <BookOpenText /></h2>
                <div className="flex mt-3 space-x-5">
                  <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 ease-out duration-300">
                  <Trash2 />
                  </button>
                  <button className="w-14 bg-brown text-slate-100 p-4 h-14 rounded-lg hover:scale-105 ease-out duration-300">
                  <Pencil/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* cards */}
        </div>
      </div>
    </div>
  );
}

export default Biblioteca;
