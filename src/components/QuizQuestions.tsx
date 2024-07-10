"use client"
import { QuestionsState } from "@/types/quiz";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import QuestionCard from "./QuestionCard";

type QuizProps = {
    questions: QuestionsState;
    totalQuestions: number;
}

export default function Quiz({questions, totalQuestions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  const router = useRouter();

  const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
   if(isQuestionAnswered) return;

   const isCorrect = questions[currentQuestionIndex].correct_answer === answer;

   if(isCorrect) setScore(prev => prev + 1);

   setUserAnswers(prev => ({...prev, [currentQuestionIndex]: answer}));
  };

  const handleChangeQuestion = (step: number) => {
   const newQuestionIndex = currentQuestionIndex + step;

   if(newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;

   setCurrentQuestionIndex(newQuestionIndex);
  };



  return (
    <div className="text-white text-center">
      <p className="p-8 font-bold text-[20px]">Score: {score}</p>
      <p className="text-[#9F50AC] font-bold pb-2 text-[14px]">Question {currentQuestionIndex + 1} out of {totalQuestions}</p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        userAnswer={userAnswers[currentQuestionIndex]}
        correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="flex justify-between mt-16">
        <Button 
          text="Prev" 
          onClick={() => handleChangeQuestion(-1)} 
        />
        <Button 
          text={currentQuestionIndex + 1 === totalQuestions ? "End" : "Next"} 
          onClick={currentQuestionIndex + 1 === totalQuestions ? () => router.push("/") : () => handleChangeQuestion(1)} 
        />
      </div>
    </div>
  )
}
