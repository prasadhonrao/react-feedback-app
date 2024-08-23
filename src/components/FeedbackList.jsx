import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = (prop) => {
  const feedback = prop.feedback;

  if (!feedback || feedback.length === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} rating={item.rating} text={item.text} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
