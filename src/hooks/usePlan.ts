import { PlanContext, PlanContextProps } from "@/context/PlanProvider";
import { useContext } from "react";

const usePlan = (): PlanContextProps => {
    const context = useContext(PlanContext);
    if (!context) {
      throw new Error('usePlan must be used within a PlanProvider');
    }
    return context;
  };

  export default usePlan;