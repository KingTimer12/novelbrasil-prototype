import { UserPlus } from "phosphor-react";

import { useState } from "react";

import Menu from "./Menu";
import BarFixed from "./BarFixed";

interface ButtonProps {
  pageName: string;
  dark: boolean;
}

export function ButtonNav({ pageName, dark }: ButtonProps) {
  return (
    <a
      href="#"
      className={`flex flex-row gap-1 justify-center items-center capitalize py-5 px-3 font-semibold ${dark ? 'text-zinc-200 hover:text-orange-600' : 'text-zinc-500 hover:text-orange-600'} transition-colors ease-out duration-200`}
    >
      {pageName}
    </a>
  );
}

interface Props {
  genders: string[];
  dark: boolean;
}

function Navigation({ genders, dark }: Props) {
  const [navbar, setNavbar] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 77) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  });

  return (
    <div>
      <nav className={`${dark ? 'bg-[#100F10]' : ''} shadow-md`}>
        <div className="mx-auto">
          <div className="flex justify-between items-center mr-12 ml-[3.5rem]">
            {/* Computador Menu */}

            {/*Nav Primaria*/}
            <div className="hidden md:flex items-center space-x-1">
              {/*Logo*/}
              <a href="#" className="flex items-center py-5 -translate-y-0.5">
                <img src="/assets/logo.png" alt="logo" className="h-9 w-9" />
              </a>

              <div className="flex justify-around items-center mt-1">
                <Menu dark={dark} genders={genders} />

                <ButtonNav dark={dark} pageName="ranking" />
                <ButtonNav dark={dark} pageName="editoria" />
              </div>
            </div>

            {/*Nav Secundaria*/}
            <div className="hidden md:flex justify-around mt-1 items-center space-x-2">
              <ButtonNav dark={dark} pageName="entrar" />
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
              {/*Logo*/}
              <a href="#" className="flex items-center py-5 -translate-y-0.5">
                <img src="/assets/logo.png" alt="logo" className="h-9 w-9" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={
          `md:hidden flex`
        }
      >
        <BarFixed navbar={navbar} />
      </div>
    </div>
  );
}

export default Navigation;
