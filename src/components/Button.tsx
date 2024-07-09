type ButtonProps = {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button 
     className='bg-[#9F50AC] select-none font-bold h-[45px] min-w-[120px] rounded-[10px] text-white'
     onClick={onClick}
    >
      {text}
    </button>
  )
}
