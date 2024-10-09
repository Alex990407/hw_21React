import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    (state) => state.questionnaire.answers[question.id]
  );

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <button
          className={styles.button}
          key={option}
          onClick={() => handleAnswer(option)}
          style={{
            backgroundColor: selectedAnswer === option ? "lightgreen" : "white",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
