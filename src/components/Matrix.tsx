import React, { useState } from 'react';
import Box from './Box';

const Matrix: React.FC = () => {
  const initialMatrix = Array(3).fill(null).map(() => Array(3).fill(false));
  const initialColorMatrix = Array(3).fill(null).map(() => Array(3).fill('bg-gray-400'));

  const [matrix, setMatrix] = useState<boolean[][]>(initialMatrix);
  const [clicks, setClicks] = useState<number[]>([]);
  const [colorMatrix, setColorMatrix] = useState<string[][]>(initialColorMatrix);

  const handleClick = (row: number, col: number) => {
    // Check if the clicked box is the last box
    const isLastBox = row === 2 && col === 2;

    if (isLastBox) {
      // Change all clicked boxes to orange and set the last box to orange
      const newColorMatrix = colorMatrix.map((r, rowIndex) =>
        r.map((_, colIndex) =>
          clicks.includes(rowIndex * 3 + colIndex) || (rowIndex === 2 && colIndex === 2) 
            ? 'bg-orange-500' 
            : 'bg-gray-400'
        )
      );
      setColorMatrix(newColorMatrix);
      return;
    }

    // Record the click
    setClicks((prevClicks) => [...prevClicks, row * 3 + col]);

    // Change the color of the clicked box to green
    const newColorMatrix = [...colorMatrix];
    newColorMatrix[row][col] = 'bg-green-500'; // Set the clicked box to green
    setColorMatrix(newColorMatrix);

    // Update the clicked state
    const newMatrix = [...matrix];
    newMatrix[row][col] = true; // Update the clicked state for the specific box
    setMatrix(newMatrix);
  };

  return (
    <div className="flex flex-col items-center">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Box
              key={colIndex}
              isClicked={cell}
              onClick={() => handleClick(rowIndex, colIndex)}
              index={rowIndex * 3 + colIndex + 1}
              color={colorMatrix[rowIndex][colIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
