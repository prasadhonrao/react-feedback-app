import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackContext } from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const feedback = useContext(FeedbackContext).feedback;

  if (!feedback || feedback.length === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} id={item.id} rating={item.rating} text={item.text} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
