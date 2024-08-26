import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = feedback.length + 1;
    setFeedback([...feedback, newFeedback]);
  }

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>{children}</FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
