"use client"
import Button from "@/components/Button";
import Image from "next/image";
import HomePageImage from "@/assets/home-pic.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = () => router.push("/quiz");

  return (
    <div className="text-center">
      <p className="text-white p-4">Start the quiz to be a master of trivia!</p>
      <Image className="max-w-[700px] w-full rounded-[10px]" src={HomePageImage} alt="home-pic" />
      <p className='text-[#9F50AC] pt-2 pb-8 text-[10px]'>Image from Unsplash by Milad Fakurian</p>
      <Button text="Start the quiz" onClick={handleButtonClick} />
    </div>
  );
}
