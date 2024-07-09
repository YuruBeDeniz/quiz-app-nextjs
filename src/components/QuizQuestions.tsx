"use client"
import { QuestionsState } from "@/types/quiz";
import { useEffect, useState } from "react";

type QuizProps = {
    questions: QuestionsState;
    totalQuestions: number;
}

export default function Quiz({questions, totalQuestions }: QuizProps) {
  console.log(questions)
  return (
    <div className="text-white text-center">Quiz Component</div>
  )
}
