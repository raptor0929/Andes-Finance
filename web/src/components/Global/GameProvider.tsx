import React, { createContext, useContext, useState, ReactNode } from 'react';

type GameContextType = {
  gameState: number;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<number>(1);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>{children}</GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
