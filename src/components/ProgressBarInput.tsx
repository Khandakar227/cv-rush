import { ChangeEvent, useState } from 'react'

interface Props {
    themeColor: string;
    percentage: number;
}

function ProgressBarInput(props: Props) {
    const [value, setValue] = useState(props.percentage);

    function handleProgress(e: ChangeEvent) {
        setValue(+(e.target as HTMLInputElement).value)
    }
    
    return (
    <>
        <input type="range" className="absolute top-0 left-0 w-full opacity-0" value={value} min={0} max={100} onChange={handleProgress}/>
        <div className="h-3 rounded-tl-lg rounded-br-lg" style={{backgroundColor: props.themeColor, width: `${value}%`}}></div> 
    </>
  )
}

export default ProgressBarInput