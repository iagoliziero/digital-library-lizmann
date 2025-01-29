import DropdownMenu from "../components/DropDownMenu";

function AddBooks() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 overflow-hidden">
      {/* Container do logo centralizado */}
      <div className="w-full flex justify-center items-center py-6 relative">
        {/* Imagem do logo */}
        <img
          className="w-[100px] md:w-[125px]"
          src="src/assets/logo-lizmann.png"
          alt="logo lizmann"
        />
        {/* Botão do menu */}
        <DropdownMenu />
      </div>

      {/* Add Books */}
      <div className="flex flex-col w-[370px] md:w-[430px] lg:w-[500px] h-[550px] md:h-[570px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg">
        <div className="flex flex-col p-10 gap-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Nome do livro:</h2>
            <input className="p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-brown focus:bg-gray-100" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl"> Autor:</h2>
            <input className="p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-brown focus:bg-gray-100" type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Gênero:</h2>
            <input className="p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-brown focus:bg-gray-100" type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> URL da imagem:</h2>
            <input className="p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-brown focus:bg-gray-100" type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Anotações :</h2>
            <input className="p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-brown focus:bg-gray-100" type="text" />
          </div>
        </div>

        <button className="bg-brown text-xl text-slate-100 w-[120px] h-[40px] md:h-[35px] md:w-[130] lg:h-[40px] lg:w-[150px] lg:text-xl rounded-3xl hover:scale-105 transition">
          Adicionar
        </button>
      </div>

      {/* Estilos para remover o foco padrão no celular */}
    </div>
  );
}

export default AddBooks;
