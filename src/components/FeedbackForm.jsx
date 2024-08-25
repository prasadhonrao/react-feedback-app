import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (e.target.value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
