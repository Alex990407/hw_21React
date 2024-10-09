import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "What is your favorite color?",
      options: ["red", "dlue"],
    },
    {
      id: 2,
      text: "What is your favorite animal?",
      options: ["dog", "cat"],
    },
  ],
  answers: {},
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    submitAnswers: (state) => {
      // Пример логики для подсчета результата
      state.result = "Спасибо за ответы!";
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
