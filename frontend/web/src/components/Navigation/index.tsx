import {
  List,
  House,
  BookOpen,
  PencilSimple,
  UserPlus,
  SignIn,
} from "phosphor-react";

import { useState } from "react";
import Mobile from "./Mobile";

interface Props {
  pageName: string;
}

function ButtonNav({ pageName }: Props) {
  const size = 24;

  let result = <House size={size} className="mb-1.5" />;
  switch (pageName) {
    case "novels":
      result = <BookOpen size={size} className="mb-1.5" />;
      break;
    case "editoria":
      result = <PencilSimple size={size} className="mb-1.5" />;
      break;
    case "entrar":
      result = <SignIn size={size} className="mb-1" />;
      break;
    default:
      break;
  }

  return (
    <a
      href="#"
      className="flex flex-row gap-1 justify-center items-center capitalize py-5 px-3 text-zinc-300 font-semibold hover:text-zinc-50 transition-colors ease-out duration-200"
    >
      {result}
      {pageName}
    </a>
  );
}

function Navigation() {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <nav className="bg-[#B42A2A]">
      <div className="px-8 mx-auto">
        <div className="flex justify-around items-center">
          {/* Computador Menu */}
          {/*Logo*/}
          <a href="#" className="flex items-center py-5 -translate-y-0.5">
            <img src="/assets/logo.png" alt="logo" className="h-9 w-9" />
          </a>

          {/*Nav Primaria*/}
          <div className="hidden md:flex items-center space-x-1.5">
            <div className="flex justify-around items-center">
              <ButtonNav pageName="home" />
              <ButtonNav pageName="novels" />
              <ButtonNav pageName="editoria" />
            </div>
          </div>

          {/*Nav Secundaria*/}
          <div className="hidden md:flex justify-around items-center space-x-2">
            <ButtonNav pageName="entrar" />
            <a
              href="#"
              className="relative rounded px-2 py-2 overflow-hidden text-white group bg-[#FF7024] hover:bg-gradient-to-r hover:from-[#FF7024] hover:to-[#FF7B35] hover:ring-2 hover:ring-offset-2 hover:ring-[#FF7B35] transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <div className="flex justify-center items-center gap-1">
                <UserPlus size={24} className="mb-0.5" />
                <span className="relative">Registrar</span>
              </div>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <Mobile />
          </div>
        </div>
      </div>

      {/* Mobile Menu
      
      <div className={!menuMobile ? 'hidden' : ''}>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Novels</a>
        <a href="#" className="block py-2 px-4 text-sm text-zinc-500 rounded-sm hover:text-white hover:bg-[#3577ff] transition-all ease-out duration-100">Editoria</a>
      </div>
      
      */}
    </nav>
  );
}

export default Navigation;
