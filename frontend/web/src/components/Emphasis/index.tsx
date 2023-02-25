import { Clock, Newspaper, User } from "phosphor-react";
import News from "./News";
import Slider from "./Slider";

interface Props {
  dark: boolean
}

function Emphasis({dark}: Props) {
  const urls = [
    "https://kiniga.com/wp-content/uploads/2021/03/New-Slide-Dahlia.jpg",
    "https://kiniga.com/wp-content/uploads/2020/02/New-Slide-Depois-de-Salvarem-um-Mundo.jpg",
    "https://us-east-1.linodeobjects.com/novelmania/uploads/admin/uploads_controller/content/1664559982/mdm_banner.jpg",
    "https://kiniga.com/wp-content/uploads/2017/10/New-Slide-Sangue-do-Dragao-Ancestral.jpg",
    "https://kiniga.com/wp-content/uploads/2017/10/A-Voz-das-Estrelas-Slide.jpg",
    "https://kiniga.com/wp-content/uploads/2021/02/New-Slide-O-Horror-de-Portsworth.jpg",
  ];

  return (
    <div className="mt-7 flex w-full flex-col lg:flex-row space-x-39">
      <div className="ml-3 lg:w-[61.66%]">
        <Slider dark={dark} urls={urls} />
      </div>
      <div className="w-[36%] mr-12">
        <News dark={dark} />
      </div>
    </div>
  );
}

export default Emphasis;
