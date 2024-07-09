import { shuffleArray } from "@/utils/shuffleArray";
import QuizQuestions from "@/components/QuizQuestions";
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

const TOTAL_QUESTIONS = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint, { cache: "no-store" })).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};

export default async function Quiz() {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

  return (
    <QuizQuestions questions={questions} totalQuestions={TOTAL_QUESTIONS} /> 
  )
}
