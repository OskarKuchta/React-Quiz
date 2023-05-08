import Question from "./question";
import Answer from "./anserws";
import Submit from "./submit";
const App = () => {
  return (
    <main className="container">
      <Question />
      <Answer val="Monday MondayMondayMondayMonday Mondayv Monday Monday Monday Monday Monday " />
      <Answer val="Friday Friday Friday  Friday Friday Friday Friday Friday Friday Friday Friday Friday " />
      <Answer val="Saturday" />
      <Answer val="Sunday" />
      <Submit />
    </main>
  );
};

export default App;
