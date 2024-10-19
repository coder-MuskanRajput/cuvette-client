const colorClasses = {
  blue: {
      text: 'text-blue-500',
      hoverText: 'hover:text-blue-100',
      hoverBg: 'hover:bg-blue-500',
      border: 'border-blue-300',
  },
  red: {
      text: 'text-red-500',
      hoverText: 'hover:text-red-100',
      hoverBg: 'hover:bg-red-500',
      border: 'border-red-300',
  },
  green: {
      text: 'text-green-500',
      hoverText: 'hover:text-green-100',
      hoverBg: 'hover:bg-green-500',
      border: 'border-green-300',
  },
};

const RoundIconButton = ({ color = 'blue', children, text, onClick }) => {
  const { text: textColor, hoverText, hoverBg, border } = colorClasses[color] || colorClasses['blue'];

  return (
      <div onClick={onClick} className={`${textColor} ${hoverText} ${hoverBg} ${border} border flex items-center justify-center flex-col p-1 aspect-square rounded-full w-fit text-xs active:scale-95 px-2 cursor-pointer`}>
          {children}
          {text}
      </div>
  );
};

export default RoundIconButton;