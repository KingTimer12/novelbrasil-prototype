import { Star, StarHalf } from "phosphor-react";

interface Props {
  score: number;
}

function StarRating({ score }: Props) {
  let middleStar = false;

  const rounded = Math.floor(score);
  let voidScore = 5 - rounded;

  if (score > rounded) {
    voidScore--;
    if (voidScore <= 0) voidScore = 0;
    middleStar = true;
  }

  return (
    <div className="flex mb-1.5">
      {[...Array(rounded)].map((star) => {
        return (
          <Star key={star} size={16} weight="fill" className="text-[#FFB62D]" />
        );
      })}
      {middleStar ? (
        <StarHalf weight="fill" size={16} className="text-[#FFB62D]" />
      ) : (
        <></>
      )}
      {[...Array(voidScore)].map((star) => (
        <Star key={star} size={16} />
      ))}
    </div>
  );
}

export default StarRating;
