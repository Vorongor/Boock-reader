import React from 'react';
import EmptyStar from './svg/emptyStar';
import FullStar from './svg/fullStar';

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  const renderFullStars = () => {
    const fullStarArray = [];
    for (let i = 0; i < fullStars; i++) {
      fullStarArray.push(<FullStar key={`full-star-${i}`} />);
    }
    return fullStarArray;
  };

  const renderEmptyStars = () => {
    const emptyStarArray = [];
    for (let i = 0; i < emptyStars; i++) {
      emptyStarArray.push(<EmptyStar key={`empty-star-${i}`} />);
    }
    return emptyStarArray;
  };

  return (
    <div className="rating-stars">
      {renderFullStars()}
      {renderEmptyStars()}
    </div>
  );
};

export default RatingStars;
