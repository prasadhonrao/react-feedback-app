import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackToEdit, setFeedbackToEdit] = useState({
    id: null,
    rating: '',
    text: '',
    edit: false,
  });

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = feedback.length + 1;
    setFeedback([...feedback, newFeedback]);
  }

  function editFeedback(id) {
    const selectedFeedback = feedback.find((item) => item.id === id);
    setFeedbackToEdit({
      id: selectedFeedback.id,
      rating: selectedFeedback.rating,
      text: selectedFeedback.text,
      edit: true,
    });
  }

  function updateFeedback(id, updatedFeedback) {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedFeedback } : item)));
    setFeedbackToEdit({
      id: null,
      rating: '',
      text: '',
      edit: false,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, feedbackToEdit, addFeedback, editFeedback, updateFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
