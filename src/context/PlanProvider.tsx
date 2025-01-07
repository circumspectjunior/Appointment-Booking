import React, { createContext, ReactNode, useState } from "react";

interface PlanContextProps {
  selectedPlanPrice: number;
  setSelectedPlanPrice: (price: number) => void;
}

const PlanContext = createContext<PlanContextProps | undefined>(undefined);

interface PlanProviderProps {
  children?: ReactNode;
}

const PlanProvider: React.FC<PlanProviderProps> = ({ children }) => {
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);

  return (
    <PlanContext.Provider value={{ selectedPlanPrice, setSelectedPlanPrice }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanContext, PlanProvider };

//export type is needed to export typescript types.
export type { PlanContextProps };
