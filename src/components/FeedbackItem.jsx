import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ rating, text }) => {
  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <div>{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
