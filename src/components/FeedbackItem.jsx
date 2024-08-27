import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { FeedbackContext } from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ id, rating, text }) => {
  const deleteFeedback = useContext(FeedbackContext).deleteFeedback;
  const editFeedback = useContext(FeedbackContext).editFeedback;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(id)}>
        <FaEdit color="purple" />
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
