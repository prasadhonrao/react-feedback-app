import React from 'react';

const FeedbackStats = ({ feedback }) => {
  const totalFeedback = feedback.length;
  const totalRating = feedback.reduce((acc, item) => acc + item.rating, 0);
  const averageRating = (totalRating / totalFeedback).toFixed(1).replace(/\.0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{totalFeedback} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
