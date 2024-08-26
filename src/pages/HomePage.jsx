import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import { FeedbackProvider } from '../context/FeedbackContext';

const HomePage = () => {
  return (
    <FeedbackProvider>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </FeedbackProvider>
  );
};

export default HomePage;
