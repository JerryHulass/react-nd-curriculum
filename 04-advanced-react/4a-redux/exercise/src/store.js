import { createStore } from 'redux';

const initialState = {
  userName: '',
  currentQuestion: null,
  previousQuestion: null,
  isCorrect: false,
  questionsAsked: [],
  correctAnswers: 0,
  wrongAnswers: 0,
  questions: [
    { id: 1, text: 'What is 2 + 2?', answer: '4', category: 'easy' },
    { id: 2, text: 'What color is the sky?', answer: 'blue', category: 'easy' },
    { id: 3, text: 'What is the capital of France?', answer: 'Paris', category: 'easy' },
    { id: 4, text: 'What planet do we live on?', answer: 'Earth', category: 'easy' },
    { id: 5, text: 'What is H2O?', answer: 'water', category: 'easy' },
  ],
};

function rootReducer (state = initialState, action) {
  if (action.type === 'SET_USER_NAME') {
    return { ...state, userName: action.payload };
  } else if (action.type === 'NEXT_QUESTION') {
    const remainingQuestions = state.questions.filter(
      (q) => !state.questionsAsked.includes(q.id)
    );

    if (remainingQuestions.length === 0) {
      return { ...state, currentQuestion: null };
    }

    const nextQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

    return {
      ...state,
      previousQuestion: state.currentQuestion,
      currentQuestion: nextQuestion,
      questionsAsked: [...state.questionsAsked, nextQuestion.id]
    };
  } else if (action.type === 'SUBMIT_ANSWER') {
    const isCorrect = action.payload.toLowerCase() === state.currentQuestion.answer.toLowerCase();

    return {
      ...state,
      isCorrect: isCorrect,
      correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
      wrongAnswers: isCorrect ? state.wrongAnswers : state.wrongAnswers + 1,
    };
  } else if (action.type === 'RESET_ALL') {
    return initialState;
  } else {
    return state;
  }
};

export default createStore(rootReducer);
