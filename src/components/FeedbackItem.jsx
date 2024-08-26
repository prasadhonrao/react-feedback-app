import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FeedbackContext } from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ id, rating, text }) => {
  const deleteFeedback = useContext(FeedbackContext).deleteFeedback;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
