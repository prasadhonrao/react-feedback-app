import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = (prop) => {
  const feedback = prop.feedback;

  if (!feedback || feedback.length === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem
              key={item.id}
              id={item.id}
              rating={item.rating}
              text={item.text}
              handleDelete={(id) => prop.handleDelete(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
