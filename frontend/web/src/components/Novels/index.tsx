import { Compass } from "phosphor-react";
import NovelCard from "./NovelCard";
import { Novel } from "../../App";

interface Props {
  title: string;
  novels: Novel[];
  dark: boolean
}

function Novels({ title, novels, dark }: Props) {
  /**
   *
   * url
   * title
   * author
   * views
   *
   */

  //Max 6

  return (
    <div>
      <div className="flex items-center bg-center pb-0 pt-1 mt-2 -mb-2 -ml-[50%] w-[%200]">
        <div className="flex justify-center flex-1">
          <h4 className={`flex ${dark ? 'text-zinc-200' : 'text-zinc-800'} font-sans px-2 text-xl font-bold justify-center items-center text-center uppercase mb-2 mt-2 ml-[41rem]`}>
            <Compass size={32} className="mr-1 mb-1" />
            {title}
          </h4>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-center h-auto">
          <div className="border-[#2d3538] pb-0">
            <div className="flex space-x-10 -mr-4 -ml-4 pt-5 pb-3">
              {novels.map((novel) => {
                const split = novel.sinopse.split(".");
                const description = split[0] + "...";

                return (
                  <NovelCard
                    key={novel.id}
                    author={novel.author}
                    description={description}
                    position={1}
                    score={novel.rating}
                    title={novel.title}
                    url={novel.coverUrl}
                    views={novel.view}
                    dark={dark}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novels;
