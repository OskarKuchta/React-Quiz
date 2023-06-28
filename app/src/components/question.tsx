interface QuestionProps {
  val: string
}

const Question = (props: QuestionProps) => {
  return <h2 className="header">{props.val}</h2>;
};

export default Question;
