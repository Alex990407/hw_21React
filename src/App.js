import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };
  return (
    <div className="app-container">
      <div className="questionnaire">
        <h1>Questionnaire</h1>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button onClick={handleSubmit} className="submit-btn">
          Send answer.
        </button>
        <Result />
      </div>
    </div>
  );
}

export default App;
