import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../img/perguntas-frequentes.png";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Escolha uma disciplina</h2>
      <p>As perguntas serão referentes a uma das disciplinas abaixo:</p>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
