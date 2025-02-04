import { useNavigate } from "react-router-dom";
import { get, useForm } from "react-hook-form";
import HeaderBooks from "../components/HeaderBooks";


function EditBooks() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 overflow-hidden">
      {/* COMPONENTE DO HEADER */}
    <HeaderBooks />

      <span className="m-5 text-2xl md:text-3xl font-bold"> <h1> Editar Livro </h1> </span>
      {/* Add Books */}
      <div className="flex flex-col w-[370px] md:w-[430px] lg:w-[500px] h-[550px] md:h-[570px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg">
        <div className="flex flex-col p-10 gap-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Nome do livro:</h2>

            <input 
            {...register('nameBook', {required:true} )}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.nameBook ? "border-2 border-red-500" : "focus:ring-brown"
            }`}
              type="text" />
             
          </div>
        
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl"> Autor:</h2>
            <input 
            {...register('nameAutor', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.nameAutor ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Gênero:</h2>
            <input 
            {...register('genero', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.genero ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> Ano de lançamento:</h2>
            <input
            {...register('date', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.date ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="number" />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl"> URL da imagem:</h2>
            <input
            {...register('imagem', {required:true})}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.imagem ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </div>
        </div>

        <button
        className="bg-brown text-xl text-slate-100 w-[120px] h-[40px] md:h-[35px] md:w-[130] lg:h-[40px] lg:w-[150px] lg:text-xl rounded-3xl hover:scale-105 transition">
          Atualizar
        </button>
      </div>
    </div>
  );
}

export default EditBooks;