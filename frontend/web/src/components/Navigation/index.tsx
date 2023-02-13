import { List } from "phosphor-react";
import { useState } from "react";
import Mobile from "./Mobile";

interface Props {
  pageName: string;
}

function ButtonNav({ pageName }: Props) {
  return (
    <a
      href="#"
      className="py-5 px-3 text-zinc-500 font-semibold hover:text-zinc-400 transition-colors ease-out duration-200"
    >
      {pageName}
    </a>
  );
}

function Navigation() {

    const [menuMobile, setMenuMobile] = useState(false)

    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile)
    }

  return (
    <nav className="bg-[#152232]">
      <div className="px-8 mx-auto">
        <div className="flex justify-around items-center">
          {/* Computador Menu */}
          {/*Logo*/}
          <a href="#" className="flex items-center py-5 -translate-y-0.5">
            <img src="/assets/logo.png" alt="logo" className="h-9 w-9" />
          </a>

          {/*Nav Primaria*/}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex justify-around items-center">
              <ButtonNav pageName="Home" />
              <ButtonNav pageName="Novels" />
              <ButtonNav pageName="Editoria" />
            </div>
          </div>

          {/*Nav Secundaria*/}
          <div className="hidden md:flex justify-around items-center space-x-2">
            <ButtonNav pageName="Entrar" />
            <a
              href="#"
              className="relative rounded px-2 py-2 overflow-hidden text-white group bg-[#3577ff] hover:bg-gradient-to-r hover:from-[#3577ff] hover:to-[#538BFF] hover:ring-2 hover:ring-offset-2 hover:ring-[#538BFF] transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Registrar</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <Mobile />
          </div>
          
        </div>
      </div>

      { /* Mobile Menu
      
      <div className={!menuMobile ? 'hidden' : ''}>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Novels</a>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Editoria</a>
      </div>
      
      */ }

    </nav>
  );
}

export default Navigation;
