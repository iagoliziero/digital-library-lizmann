import DropdownMenu from "../components/DropDownMenu";

function HeaderBiblioteca() {
  return (
    <div className="w-full flex justify-center items-center py-6 relative">
      {/* Container do logo centralizado */}
      {/* Imagem do logo */}
      <img
        className="w-[100px] md:w-[125px]"
        src="src/assets/logo-lizmann.png"
        alt="logo lizmann"
      />
      {/* Botão do menu */}
      <DropdownMenu />
    </div>
  ); // Fechamento correto do JSX
}

export default HeaderBiblioteca;

