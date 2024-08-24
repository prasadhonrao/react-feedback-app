import PropTypes from 'prop-types';

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

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackStats;
