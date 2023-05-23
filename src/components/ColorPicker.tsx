import { UndoRedoElement, useUndoRedo } from '../context/undoRedo';
import { Dispatch, SetStateAction, useState } from 'react'
import { ColorResult, SketchPicker } from 'react-color'


function ColorPicker({theme, setTheme}:{theme: string, setTheme: Dispatch<SetStateAction<string>>}) {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [undoRedoElement, setElement] = useState({} as UndoRedoElement);

    const {addUndo} = useUndoRedo();

    const handleClick = () => {
        setDisplayColorPicker(true);
        //Add the previous state to "from"
        setElement(v => {
            v.from = {fx:setTheme, args:[theme]}
            return v
        });
    }
    
    const handleClose = () => {
        setDisplayColorPicker(false);
        if (theme != undoRedoElement?.from?.args[0]) {
            setElement(v => {
                v.to = {fx:setTheme, args:[theme]}
                
                addUndo({
                    ...undoRedoElement,
                    to: {fx:setTheme, args:[theme]}
                });

                return v
            });
        }
    }

    const handleChange = (e: ColorResult) => {
        // console.log("Color change ",e)
        setTheme(e.hex);
    }

    return (
      <div>
        <div className="p-1 bg-white rounded-sm shadow inline-block cursor-pointer" onClick={ handleClick }>
          <div className="w-9 h-4 rounded-sm" style={{background: theme}} />
        </div>
        { displayColorPicker ? <div className='absolute z-10'>
          <div className="fixed top-0 bottom-0 left-0 right-0" onClick={ handleClose }/>
          <SketchPicker color={ theme } onChange={ handleChange } />
        </div> : null }
      </div>
    )

}

export default ColorPicker
