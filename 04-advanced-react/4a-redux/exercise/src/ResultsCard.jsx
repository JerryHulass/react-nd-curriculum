import {useSelector} from 'react-redux';

function ResultsCard () {
  const isCorrect = useSelector((state) => state.isCorrect);
  const question = useSelector((state) => state.previousQuestion);

  return (
    <div>
      <h3>Previous Question:</h3>
      <p>{question.text}</p>
      <p>Answer: {question.answer}</p>
      <h3>{isCorrect ? 'Correct!' : 'Try the next question...'}</h3>
    </div>
  )
};

export default ResultsCard;
