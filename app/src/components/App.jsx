import Question from "./question";
import Answer from "./anserws";
import Submit from "./submit";
const App = () => {
  return (
    <main className="container">
      <Question />
      <Answer val="Venice" />
      <Answer val="Rome" />
      <Answer val="Naples" />
      <Answer val="Milan" />
      <Submit />
    </main>
  );
};

export default App;
