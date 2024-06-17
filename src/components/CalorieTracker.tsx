import { useMemo } from "react";
import { CalorieDisplay } from "./CalorieDisplay";
import { useActivity } from "../hook/useActivity";

export function CalorieTracker() {
  const { state } = useActivity();

  const { activities } = state;

  const caloriesCosumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const netCalories = useMemo(
    () => caloriesCosumed - caloriesBurned,
    [caloriesBurned, caloriesCosumed]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gaop-5 mt-10">
        <CalorieDisplay calories={caloriesCosumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="Quemadas" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}
