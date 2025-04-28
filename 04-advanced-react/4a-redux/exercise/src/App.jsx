import { useDispatch, useSelector } from 'react-redux';
import TriviaForm from './TriviaForm';
import ResultsCard from './ResultsCard';

function App () {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const previousQuestion = useSelector((state) => state.previousQuestion);
  const correctAnswers = useSelector((state) => state.correctAnswers);
  const wrongAnswers = useSelector((state) => state.wrongAnswers);
  const questionsAsked = useSelector((state) => state.questionsAsked);
  const questions = useSelector((state) => state.questions);

  function handleNameSubmit (e) {
    e.preventDefault();
    dispatch({ type: 'SET_USER_NAME', payload: e.target.name.value });
    dispatch({ type: 'NEXT_QUESTION' });
  };

  function handleNextQuestion () {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  function handleResetAll () {
    dispatch({ type: 'RESET_ALL' });
  };

  return (
    <div>
      {!userName && (
        <form onSubmit={handleNameSubmit}>
          <label>
            Enter your name:
            <input type="text" name="name" />
          </label>
          <button type="submit">Start</button>
        </form>
      )}

      {userName && (
        <div>
          <h2>Hello, {userName}!</h2>
          <p>Correct: {correctAnswers}</p>
          <p>Wrong: {wrongAnswers}</p>
          {currentQuestion ? (
            <TriviaForm />
          ) : (
            <div>
              <p>All questions have been asked. Great job!</p>
              {questionsAsked.length < questions.length ? (
                <button onClick={handleNextQuestion}>Next Question</button>
              ) : (
                <button onClick={handleResetAll}>Restart Quiz</button>
              )}
            </div>
          )}

          {previousQuestion && <ResultsCard />}
        </div>
      )}
    </div>
  );
};

export default App;
