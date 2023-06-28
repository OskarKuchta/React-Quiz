interface QuestionsInt {
  question: string;
  options: string[];
  answer: string;
}

const questions: QuestionsInt[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest country in the world?",
    options: ["USA", "China", "Russia", "India"],
    answer: "Russia",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Dollar", "Euro"],
    answer: "Yen",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "What is the currency of Mexico?",
    options: ["Dollar", "Peso", "Euro", "Yen"],
    answer: "Peso",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Arctic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the highest mountain in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount Fuji",
      "Mount Denali",
    ],
    answer: "Mount Everest",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville", "Valencia"],
    answer: "Madrid",
  },
];

export default questions;
