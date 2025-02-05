import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import HeaderBooks from "../components/HeaderBooks";
import api from "../services/api.js"
import { useState } from "react";
import DivForm from "../components/DivForm.jsx";
function AddBooks() {

  const navigate = useNavigate()

  async function getBooks() {
    await api.get('/books')
    }

  async function createBooks(data) {
    setAdd(true)
    await api.post("/books", {
      ...data,
      year: parseInt(data.year, 10), // Converte "year" para número
    });
    getBooks()
    setTimeout(() => {
      navigate('/biblioteca')
    }, 1000);
}
  const [add, setAdd] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm()

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 overflow-hidden">
      {/* COMPONENTE DO HEADER */}
    <HeaderBooks />

      <span className="m-5 text-2xl md:text-3xl font-bold"> <h1> Adicionar Livro </h1> </span>
      {/* Add Books */}
      <div className="flex flex-col w-[370px] md:w-[430px] lg:w-[500px] h-[550px] md:h-[570px] border-2 border-zinc-500 rounded-2xl items-center text-center bg-slate-100 shadow-lg">
        <div className="flex flex-col p-10 gap-2">
          <DivForm>
            <h2 className="text-xl md:text-2xl"> Nome do livro:</h2>

            <input 
            maxLength={18}
            {...register('title', {required:true} )}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.title ? "border-2 border-red-500" : "focus:ring-brown"
            }`}
              type="text" />
             
          </DivForm>
          <DivForm >
            <h2 className="text-xl md:text-2xl"> Autor:</h2>
            <input 
            {...register('author', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.author ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </DivForm>

          <DivForm >
            <h2 className="text-xl md:text-2xl"> Gênero:</h2>
            <input 
            
            {...register('genero', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.genero ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </DivForm>

          <DivForm >
            <h2 className="text-xl md:text-2xl"> Ano de lançamento:</h2>
            <input
  
            {...register('year', {required:true})}
            maxLength={23}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.year ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="number" />
          </DivForm>

          <DivForm >
            <h2 className="text-xl md:text-2xl"> URL da imagem:</h2>
            <input
  
            {...register('urlImage', {required:true})}
            className={`p-1 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-100 ${
              errors?.urlImage ? "border-2 border-red-500" : "focus:ring-brown"
            }`} type="text" />
          </DivForm>
        </div>

        <button
        onClick={() => handleSubmit(createBooks)()}
        className="bg-brown text-xl text-slate-100 w-[120px] h-[40px] md:h-[35px] md:w-[130] lg:h-[40px] lg:w-[150px] lg:text-xl rounded-3xl hover:scale-105 transition" disabled={add}>
          {add ? "Adicionando..." : "Adicionar"}
        </button>
      </div>
      
    </div>
  );
}

export default AddBooks;
