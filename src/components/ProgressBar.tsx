import DragEditDiv from "./DEDiv";
import ProgressBarInput from "./ProgressBarInput";

interface Props {
    themeColor: string;
    text: string;
    percentage: number
}

function ProgressBar(props:Props) {
    return (
        <div>
            <DragEditDiv className="py-1 whitespace-pre-wrap" fontSize={12}> {props.text} {"                               "}{props.percentage}% </DragEditDiv>
            <DragEditDiv className="h-3 border bg-gray-300 relative w-full rounded-tl-lg rounded-br-lg">
                <ProgressBarInput percentage={props.percentage} themeColor={props.themeColor} />
            </DragEditDiv>
        </div>
    )
}

export default ProgressBar