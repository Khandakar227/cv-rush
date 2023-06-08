import React, { HTMLAttributes, useRef, useId, useState, useReducer } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import { UndoRedoElement, UndoRedoFunction, useUndoRedo } from "../context/undoRedo";
import { drag } from "../utils";
import ContextMenu from "./ContextMenu";
import { useDragEnable } from "../context/dragEnable";

interface DEDivProps extends HTMLAttributes<HTMLDivElement> {
  fontSize?: number
  background?: string
  disabledrag?: boolean
  disableContextMenu?: boolean
  isUnderTransform?: boolean
}

type ReducerState = {
  undoRedoElement: UndoRedoElement,
  disabled: boolean,
  menuPos: { x: number, y: number },
  fontSize: number,
};

type Action =
  | { type: "undoRedoElement", payload: UndoRedoElement }
  | { type: "disabled", payload: boolean }
  | { type: "menuPos", payload: { x: number, y: number } }
  | { type: "fontSize", payload: number }
  | { type: "undo-from", payload: UndoRedoFunction }
  | { type: "undo-to", payload: UndoRedoFunction }

const reducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case "disabled":
      return { ...state, disabled: action.payload }
    case "fontSize":
      return { ...state, fontSize: action.payload }
    case "menuPos":
      return { ...state, menuPos: action.payload }
    case "undo-from":
      return {
        ...state, undoRedoElement: {
          ...state.undoRedoElement,
          from: action.payload
        }
      }
    case "undo-to":
      return {
        ...state, undoRedoElement: {
          ...state.undoRedoElement,
          to: action.payload
        }
      }
    default:
      return state;
  }
}
const DragEditDiv: React.FC<DEDivProps> = ({
  children,
  ...props
}: DEDivProps) => {
  const divRef = useRef({} as HTMLDivElement);
  const id = useId();
  const [states, updateStates] = useReducer(reducer, {
    undoRedoElement: {} as UndoRedoElement,
    disabled: props.disabledrag || false,
    menuPos: { x: 0, y: 0 },
    fontSize: props.fontSize || 16,
  });

  const {enableDrag} = useDragEnable()
  const { addUndo } = useUndoRedo();
  const [showMenu, setShowMenu] = useState(false);


  const handleDragStart = (_: DraggableEvent) => {
    const element = divRef.current;

    updateStates({
      type: "undo-from",
      payload: { fx: drag, args: [element.id, element.style.transform] }
    })
  };

  const handleDragEnd = (_: DraggableEvent) => {
    const element = divRef.current;
    //Add undoRedo to element
    updateStates({
      type: "undo-to",
      payload: { fx: drag, args: [element.id, element.style.transform] }
    })
    //Add element to undoRedoStack
    addUndo({
      ...states.undoRedoElement,
      to: { fx: drag, args: [element.id, element.style.transform] }
    });
  };

  // const onFocus = () => {
  // }

  // const onBlur = () => {
  // }

  function handleContextMenu(e: React.MouseEvent) {
    if (props.disableContextMenu) return;
    // console.log("contextmenu");
    e.preventDefault();

    setShowMenu(true);

    updateStates({
      type: "menuPos",
      payload: {
        x: e.clientX,
        y: e.clientY,
      }
    });

  }
  function changeFontSize(e: React.ChangeEvent) {
    updateStates({
      type: "fontSize",
      payload: +(e.target as HTMLInputElement).value,
    });

    // updateStates({
    //   undoRedoElement: {
    //     from: { fx: updateStates, args: [{ fontSize: states.fontSize }] },
    //     to: { fx: updateStates, args: [{ fontSize: +(e.target as HTMLInputElement).value } as ReducerProps] }
    //   }
    // });

    addUndo({
      ...states.undoRedoElement,
      from: { fx: updateStates, args: [{ type: "fontSize", payload: states.fontSize }] },
      to: { fx: updateStates, args: [{ type: "fontSize", payload: +(e.target as HTMLInputElement).value }] }
    });
  }

  const remove = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;
    el.style.display = "none";

    setShowMenu(false);

    addUndo({
      from: { fx: addElement, args: [divRef.current.id] },
      to: { fx: remove, args: [divRef.current.id] }
    })
  }

  const addElement = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.style.display = "block"
  }
  return (
    <>
      {divRef.current && (
        <Draggable grid={[10, 10]} disabled={states.disabled ? states.disabled : !enableDrag} onStart={handleDragStart} onStop={handleDragEnd}>
          <div
            {...props}
            id={id}
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            // onFocus={onFocus}
            // onBlur={onBlur}
            style={{ ...props.style, fontSize: `${states.fontSize}px` }}
            onContextMenu={handleContextMenu}
            data-name='drageditdiv'
          >
            {children}
          </div>
        </Draggable>
      )}
      <ContextMenu props={{ ...states.menuPos, show: showMenu, setShowMenu: setShowMenu, underTransform: props.isUnderTransform }}>
        <div className="border-b text-sm flex gap-2 justify-start items-center">
          Font size:
          <input className="p-2 rounded-md shadow border w-24" defaultValue={states.fontSize} max={100} min={0} type="number" onChange={changeFontSize} />
        </div>
        <button onClick={() => remove(divRef.current.id)} className="border-b text-left w-full text-sm py-1 px-2 hover:bg-gray-300">Remove</button>
      </ContextMenu>
    </>
  );
};

const DEDiv: React.FC<DEDivProps> = ({
  children,
  ...props
}: DEDivProps) => {
  const [numOfElement, setNumOfElement] = useState(1);
  const { addUndo } = useUndoRedo();

  const addElement = () => {
    setNumOfElement(n => n + 1);

    addUndo({
      from: { fx: removeElement, args: [numOfElement] },
      to: { fx: addElement, args: [numOfElement] }
    })
  }
  const removeElement = () => {
    setNumOfElement(n => n - 1);
  }
  return (
    <div className="group">
      <button className="font-bold group-hover:block hidden shadow px-2 rounded-full absolute z-10 border bg-orange-400" onClick={addElement}> + </button>
      {
        [...Array(numOfElement).keys()].map(_ => (
          <DragEditDiv {...props} key={"drageditdiv"+_} > {children} </DragEditDiv>
        ))
      }
    </div>
  )
}
export default DEDiv;