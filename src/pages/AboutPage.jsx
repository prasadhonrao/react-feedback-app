import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About React Feedback App</h1>
        <p>
          This app is a simple feedback app built with React. It allows users to provide feedback and view statistics
          about the feedback they have provided.
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
