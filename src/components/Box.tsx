import React from 'react';

interface BoxProps {
  isClicked: boolean;
  onClick: () => void;
  index: number;
  color: string;
}

const Box: React.FC<BoxProps> = ({ onClick, index, color }) => {
  return (
    <div
      onClick={onClick}
      className={`w-20 h-20 m-2 flex items-center justify-center text-2xl font-bold border cursor-pointer 
        ${color} transition-all duration-300 ease-in-out 
        rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 hover:rotate-3
        hover:border-transparent hover:ring-2 hover:ring-offset-2 hover:ring-${color}-500
        bg-gradient-to-r from-${color}-400 via-${color}-300 to-${color}-500`}
    >
      {index}
    </div>
  );
};

export default Box;
