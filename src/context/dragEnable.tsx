import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from "react";

export const DragEnableContext = createContext({
    enableDrag: false,
    setEnableDrag: {} as Dispatch<SetStateAction<boolean>>,
  });

export const useDragEnable = () => useContext(DragEnableContext);

function DragEnableProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const [enableDrag, setEnableDrag] = useState(false);
  return (
    <DragEnableContext.Provider value={{ enableDrag, setEnableDrag }}>
      {children}
    </DragEnableContext.Provider>
  )
}

export default DragEnableProvider