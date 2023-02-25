import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  List,
  House,
  BookOpen,
  PencilSimple,
  UserPlus,
  SignIn,
  ChartBarHorizontal,
} from "phosphor-react";
import { useEffect, useState } from "react";

interface Props {
  navbar: boolean;
}

interface ButtonProps {
  name: string;
}
function ButtonNav({ name }: ButtonProps) {
  const size = 30;

  let result = <House size={size} />;
  switch (name) {
    case "novels":
      result = <BookOpen size={size} />;
      break;
    case "editoria":
      result = <PencilSimple size={size} />;
      break;
    case "ranking":
      result = <ChartBarHorizontal size={size} />;
      break;
    case "entrar":
      result = <SignIn size={size} />;
      break;
    case "registrar":
      result = <UserPlus size={size} />;
      break;
    default:
      break;
  }

  return (
    <DropdownMenu.Item className="capitalize outline-none flex flex-col justify-center items-center cursor-pointer text-zinc-500 font-semibold hover:text-orange-600 transition-colors ease-out duration-100">
      {result}
      <span>{name}</span>
    </DropdownMenu.Item>
  );
}

const BarFixed = ({ navbar }: Props) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [opened, setOpened] = useState(false)

  window.addEventListener('resize', () => {
    if (opened) {
      setMenuOpen(false)
    }
  })

  return (
    <div className="fixed z-10 bottom-12 right-12 h-12 w-12 rounded-md flex justify-center items-center cursor-pointer">
      <DropdownMenu.Root modal={false} open={menuOpen} onOpenChange={(status) => setOpened(status)}>
        <DropdownMenu.Trigger asChild>
          <div onClick={() => setMenuOpen(!menuOpen)} className="relative rounded px-3 py-3 overflow-hidden text-white group bg-[#DA4E05] hover:bg-gradient-to-r hover:from-[#DA4E05] hover:to-[#FF7B35] hover:ring-2 hover:ring-offset-2 hover:ring-[#FF7B35] transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-6 h-6">
                <span className={`absolute bar ${menuOpen ? 'active' : ''}`}></span>
                <span className={`absolute bar ${menuOpen ? 'active' : ''}`}></span>
                <span className={`absolute bar ${menuOpen ? 'active' : ''}`}></span>
              </div>
            </div>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            loop
            sideOffset={18}
            className={`${
              navbar ? "md:hidden" : "md:grid"
            } grid sm:grid-cols-3 grid-cols-2 gap-2 p-3 min-w-[13.125rem] bg-white rounded-md data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade shadow-2xl`}
          >
            <ButtonNav name="novels" />
            <ButtonNav name="ranking" />
            <ButtonNav name="editoria" />
            <ButtonNav name="entrar" />
            <ButtonNav name="registrar" />

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default BarFixed;
