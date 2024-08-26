import { useState } from 'react';

import FeedbackData from '../data/FeedbackData';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = feedback.length + 1;
    setFeedback([...feedback, newFeedback]);
  }

  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
};

export default HomePage;
