// Latihan component & props

import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';

const Card = ({ image, altImage, title, rating, reviewCount, secondaryText, description }) => {
  const starsPlus = [];
  for (let i = 0; i < rating; i++) {
    starsPlus.push(<FaStar key={`filled-${i}`} />);
  }

  const starsMins = [];
  const emptyStarsCount = 5 - rating;
  for (let i = 0; i < emptyStarsCount; i++) {
    starsMins.push(<CiStar key={`empty-${i}`} />);
  }

  return (
    <div className="bg-slate-200 w-[200px] rounded-2xl overflow-hidden">
      {/* image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img src={image} alt={altImage} className="w-full bg-cover" />
      </div>
      {/* Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {starsPlus}
            {starsMins}
          </div>
          <p className="text-sm">{rating}</p>
          <p className="text-sm">({reviewCount})</p>
        </div>
        <hr className="mt-5"></hr>
        <h3 className="text-lg font-semibold">{secondaryText}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Card;
