import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TriviaForm = (props) => {
  const currentQuestion = useSelector((store) => store.currentQuestion);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_ANSWER', payload: answer });
    dispatch({ type: 'NEXT_QUESTION' });
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{currentQuestion.text}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TriviaForm;
