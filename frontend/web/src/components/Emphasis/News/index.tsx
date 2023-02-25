import { Clock, Newspaper, User } from "phosphor-react";
import React from "react";

interface NewsProps {
  thumbnail: string;
  title: string;
  date: string;
  author: string;
  dark: boolean;
}

function NewsList({ dark, thumbnail, title, date, author }: NewsProps) {
  return (
    <div className="mb-3" title={title}>
      <li className={`relative cursor-pointer flex items-center rounded shadow-xl max-w-lg pt-2 pb-2 ${dark ? 'bg-[#ffffff14]' : 'bg-zinc-100 hover:bg-zinc-200'} hover:shadow-2xl transition-all ease-in-out duration-100`}>
        <img
          src={thumbnail}
          alt="thumbnail"
          className="float-left inline-block ml-3 mr-2 w-28 h-16 rounded"
        />
        <div className="mt-1">
          <h4 className={`break-words tracking-tight font-semibold ${dark ? 'text-white' : ''}`}>
            {title}
          </h4>
          <div className={`flex items-center justify-start ${dark ? 'text-white' : ''}`}>
            <div className="flex items-center justify-center">
              <Clock size={18} weight="fill" className="pb-0.5" />
              <span className="pl-0.5">{date}</span>
            </div>
            <div className="pl-5"></div>
            <div className="flex items-center justify-center">
              <User size={18} weight="fill" className="pb-0.5" />
              <span className="pl-1">{author}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

interface Props {
  dark: boolean;
}

const News = ({ dark }: Props) => {
  return (
    <div className="">
      <div className="mb-12 flex items-center md:mb-5">
        <Newspaper size={32} className={dark ? "text-white" : ""} />
        <h3
          className={`text-lg mt-1 md:text-2xl font-bold ${
            dark ? "text-white" : ""
          }`}
        >
          Notícias
        </h3>
        <a
          href="/"
          className={`ml-auto mt-1 font-semibold text-sm md:text-base ${
            dark ? "text-zinc-400" : "text-zinc-700"
          }`}
        >
          Ver tudo
        </a>
      </div>
      <ul>
        <NewsList
          dark={dark}
          author="Rose Kethen"
          date="Há 5 meses"
          title="Leia Agora: O Mestre da Masmorra"
          thumbnail="https://us-east-1.linodeobjects.com/novelmania/uploads/admin/uploads_controller/content/1664559982/mdm_banner.jpg"
        />
        <NewsList
          dark={dark}
          author="Rose Kethen"
          date="Há 5 meses"
          title="Novel Mania e Novel Brasil: Alcance o Sucesso"
          thumbnail="https://us-east-1.linodeobjects.com/novelmania/uploads/admin/uploads_controller/content/1656228836/post_parceria_nb.jpg"
        />
        <NewsList
          dark={dark}
          author="Rose Kethen"
          date="Há 1 ano"
          title="Recrutamento de Designers"
          thumbnail="https://static-cse.canva.com/_next/static/assets/home-banner_w2400xh1200_026dee96ea39245379d0b046df56a204bc7839639486768852fad849503de5b8.png"
        />
        <NewsList
          dark={dark}
          author="Rose Kethen"
          date="Há 5 meses"
          title="Leia Agora: O Mestre da Masmorra"
          thumbnail="https://us-east-1.linodeobjects.com/novelmania/uploads/admin/uploads_controller/content/1664559982/mdm_banner.jpg"
        />
      </ul>
    </div>
  );
};

export default News;
