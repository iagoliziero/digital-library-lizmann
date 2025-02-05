function ButtonNav(props) {
    return (
        <button 
        {...props}
        className="bg-brown text-xl text-slate-100 w-[120px] h-[45px] md:h-[50px] md:w-[130] lg:h-[55px] lg:w-[150px] lg:text-2xl rounded-3xl mt-4 hover:scale-105 transition">
          {props.children}  
        </button>
    )
}

export default ButtonNav