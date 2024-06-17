import { Dispatch, ReactNode, createContext, useReducer } from "react";
import {
  activityActions,
  activityReducer,
  activityState,
  initialState,
} from "../reducers/activity-reducer";

type ActivityProvaiderProps = {
  children: ReactNode;
};

type ActivityContextProps = {
  state: activityState;
  dispatch: Dispatch<activityActions>;
};

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvaider = ({ children }: ActivityProvaiderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};
