import { arrayEquals } from "../utils";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type UndoRedoFunction = {
  fx: Function;
  args: any[];
};

export interface UndoRedoElement {
  from: UndoRedoFunction;
  to: UndoRedoFunction;
}
export interface UndoRedoProps {
  undoStack: UndoRedoElement[];
  setUndoStack:Dispatch<SetStateAction<UndoRedoElement[]>>
  redoStack: UndoRedoElement[];
  setRedoStack:Dispatch<SetStateAction<UndoRedoElement[]>>
  addUndo: (element: UndoRedoElement) => void;
  addRedo: (element: UndoRedoElement) => void;
  undo: () => void;
  redo: () => void;
}

const undoRedoContext = createContext({} as UndoRedoProps);

export const useUndoRedo = () => {
  return useContext(undoRedoContext);
};

export default function UndoRedoProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [undoStack, setUndoStack] = useState([] as UndoRedoElement[]);
  const [redoStack, setRedoStack] = useState([] as UndoRedoElement[]);

  const addUndo = (element: UndoRedoElement) => {
    if (element.from?.fx == element.to?.fx && arrayEquals(element.from?.args, element.to?.args))
    return;

    setUndoStack(stk => {
        if( !isDuplicate(element, stk) ) stk.push(element);
        return stk;
    })
    
    console.log("addUndo", undoStack);
  };

  const addRedo = (element: UndoRedoElement) => {
    setRedoStack(stk => {
        stk.push(element);
        return stk;
    })
    console.log("addRedo ", redoStack);
  };

  const undo = () => {
    let element: UndoRedoElement | undefined;

    setUndoStack((stk) => {
        // Remove the top element from the stack and return it
        element = stk.pop();
        // Return the modified stack
        return stk;
      });
    // If there is no element then simply return
    if (element == undefined) return;

    element.from?.fx(...element.from.args);
    addRedo(element);

  };

  const redo = () => {
    let element: UndoRedoElement | undefined;

    setRedoStack((stk) => {
        // Remove the top element from the stack and return it
        element = stk.pop();
        // Return the modified stack
        return stk;
      });
    // If there is no element then simply return
    if (element == undefined) return;

    element.to?.fx(...element.to.args);
    addUndo(element);
  };

  return (
    <undoRedoContext.Provider
      value={{
        undoStack,
        setUndoStack,
        redoStack,
        setRedoStack,
        undo,
        redo,
        addUndo,
        addRedo,
      }}
    >
      {children}
    </undoRedoContext.Provider>
  );
}

function isDuplicate(element:UndoRedoElement, stack: UndoRedoElement[]) {
    if (!stack.length) return false;
    if (stack[stack.length - 1]?.from?.fx.name != element?.from?.fx.name) return false;
    if (stack[stack.length - 1]?.to?.fx.name != element?.to?.fx.name) return false;
    if (!arrayEquals(stack[stack.length - 1]?.from?.args, element?.from?.args)) return false;
    if (!arrayEquals(stack[stack.length - 1]?.to?.args, element?.to?.args)) return false;

    return true;
}