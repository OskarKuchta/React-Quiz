import Question from "./question";
import Answer from "./anserws";
import Submit from "./submit";
import questions from "./questions";
const App = () => {
  return (
    <main className="container">
      <Question />
      <Answer option={questions[0].options[0]}/>
      <Answer option={questions[0].options[1]}/>
      <Answer option={questions[0].options[2]}/>
      <Answer option={questions[0].options[3]}/>
      <Submit />
    </main>
  );
};

export default App;
