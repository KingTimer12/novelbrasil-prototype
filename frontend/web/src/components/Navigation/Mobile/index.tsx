import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  List,
  House,
  BookOpen,
  PencilSimple,
  UserPlus,
  SignIn,
} from "phosphor-react";

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
    <DropdownMenu.Item className="capitalize outline-none flex flex-col justify-center items-center cursor-pointer hover:text-[#3577ff] transition-colors ease-out duration-100">
      {result}
      <span>{name}</span>
    </DropdownMenu.Item>
  );
}

function Mobile() {
  return (
    <div className="md:hidden">
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <button
            aria-label="Customise options"
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center outline-none"
          >
            <List size={24} className="text-white" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            loop
            sideOffset={18}
            className="md:hidden grid sm:grid-cols-3 grid-cols-2 gap-2 p-3 min-w-[13.125rem] bg-white rounded-md data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          >
            <ButtonNav name="home" />
            <ButtonNav name="novels" />
            <ButtonNav name="editoria" />
            <ButtonNav name="entrar" />
            <ButtonNav name="registrar" />

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default Mobile;
