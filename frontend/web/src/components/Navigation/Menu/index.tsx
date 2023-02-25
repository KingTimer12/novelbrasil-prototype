import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ButtonNav } from "..";

interface MenuProps {
  buttonName: string;
}

function MenuButton({ buttonName }: MenuProps) {
  return (
    <li>
      <a href="#" className="cursor-pointer">
        <div className="px-2 py-1 font-bold text-base capitalize outline-none flex justify-center items-center rounded-md hover:text-white hover:bg-orange-600 transition-colors ease-in duration-100">
          {buttonName}
        </div>
      </a>
    </li>
  );
}

interface Props {
  genders: string[];
  dark: boolean;
}

const Menu = ({ genders, dark }: Props) => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <ButtonNav dark={dark} pageName="Novels" />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-0 left-0">
            <ul className="grid gap-x-2 pt-2 pl-1 grid-flow-col grid-rows-5">
              {genders.map((gender) => (
                <MenuButton key={gender} buttonName={gender} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-orange-400" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute z-10 flex justify-center">
        <NavigationMenu.Viewport className="bg-orange-400 h-44 w-72 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] origin-[top_center] overflow-hidden rounded-md transition-[width,_height] duration-300" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Menu;
