import * as HoverCard from "@radix-ui/react-hover-card";
import { Eye } from "phosphor-react";
import { nFormatter } from "../../../utils/viewFormat";
import StarRating from "../../StarRating";

interface Props {
  url: string;
  title: string;
  description: string;
  author: string;
  position: number;
  views: number;
  score: number;
  dark: boolean;
}

/**/

function NovelCard({
  url,
  title,
  description,
  author,
  position,
  views,
  score,
  dark
}: Props) {
  return (
    <div>
      <HoverCard.Root openDelay={120} closeDelay={80}>
        <HoverCard.Trigger>
          <div className="w-48 h-64">
            <a
              href=""
              className="block relative rounded-lg overflow-hidden text-white hover:text-orange-600 transition-all ease-out duration-200"
            >
              <img src={url} alt={`banner-${title}`} />
              <div className="w-full pt-16 pb-4 px-4 bg-black-gradiant absolute bottom-0 left-0 right-0">
                <strong className="font-bold">{title}</strong>
              </div>
            </a>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className={`data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md ${dark ? 'bg-neutral-800' : 'bg-white'} p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all`}
            sideOffset={5}
            side="right"
            align="start"
          >
            <div className="flex flex-col gap-[7px]">
              <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[15px]">
                  <div className="flex flex-col gap-[5px]">
                    <div>{description}</div>
                    <div className="flex items-center">
                      <div className="text-sm">{author}</div>
                      <span className="mr-2 ml-2">•</span>
                      <div className="text-sm">Posição: {position}º</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex flex-1 items-center">
                        <Eye weight="bold" size={16} className="mr-1" />
                        <span className="font-semibold">
                          {nFormatter(views, 1)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        {score}/5
                        <div className="mr-0.5 ml-0.5"></div>
                        <StarRating score={score} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HoverCard.Arrow className={dark ? 'fill-black' : 'fill-white'} />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}

export default NovelCard;
