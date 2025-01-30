import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    return (
        <div className='h-screen bg-bg-lizmann bg-cover bg-center bg-no-repeat ' > 
            <div className="flex justify-center"> 
                <img className="w-[100px] md:w-[125px] mt-8" src="src/assets/logo-lizmann.png" alt="logo lizmann" />
            </div>
            <div className="flex flex-col items-center justify-center text-center h-[calc(100%-700px)] mt-[170px] gap-4">
                <h1 className="text-slate-100 text-5xl font-black md:text-6xl lg:text-7xl font-darker">  SUA BIBLIOTECA <br/> NA PALMA DA MÃO</h1>
                <div className="flex gap-2">
                    <p className="text-slate-100 text-[17px] md:text-xl lg:text-2xl"> Biblioteca pessoal para sua, </p>
                    <p className="text-slate-100 text-[17px] md:text-xl lg:text-2xl bg-brown rounded-md"> avaliação, organização e anotação </p>
                </div>
                <div>
                    <button onClick={() => navigate(`/biblioteca`)}
                     className="bg-brown text-xl text-slate-100 w-[120px] h-[40px] md:h-[40px] md:w-[130] lg:h-[45px] lg:w-[150px] lg:text-xl rounded-3xl mt-4 hover:scale-105 transition">
                        Acessar
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home;