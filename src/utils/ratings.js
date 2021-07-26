import age1 from "../assets/rating/ico-classind1.svg";
import age10 from "../assets/rating/ico-classind10.svg";
import age12 from "../assets/rating/ico-classind12.svg";
import age14 from "../assets/rating/ico-classind14.svg";
import age16 from "../assets/rating/ico-classind16.svg";
import age18 from "../assets/rating/ico-classind18.svg";
import free from "../assets/rating/ico-classindlivre.svg";
import allFree from "../assets/rating/ico-livretodos.svg";

export const ageRating = (type) => {
  const ratings = {
    age1: age1,
    age10: age10,
    age12: age12,
    age14: age14,
    age16: age16,
    age18: age18,
    free: free,
    allFree: allFree,
  };

  return ratings[type];
};
