import { ChangeEvent, useEffect, useState } from "react";
import JsPDF, { HTMLFontFace } from "jspdf";
import { AiOutlineUndo, AiOutlineRedo, AiOutlineDrag } from "react-icons/ai"
import UndoRedoProvider, { useUndoRedo } from "../../context/undoRedo";
import ColorPicker from "../../components/ColorPicker";
import Template1 from "../../components/cv-generator/v2/temp1";
import Template2 from "../../components/cv-generator/v2/temp2";
import Template3 from "../../components/cv-generator/v2/temp3";
import Navbar from "../../components/Navbar";
import DragEnableProvider, { useDragEnable } from "../../context/dragEnable";

const templates = [
    { label: "General" },
    { label: "Professional" },
    { label: "Elegant" },
];

const V2 = () => {
    const [theme, setTheme] = useState("#4338ca");
    const [templateNumber, setTemplate] = useState(0);
    const {enableDrag, setEnableDrag} = useDragEnable();
    const { undo, redo, setRedoStack, setUndoStack } = useUndoRedo();

    useEffect(()=> {
        const tempNum = localStorage.getItem('templateNumber');
        if(tempNum) setTemplate(+tempNum);
        else setTemplate(1);
    }, [])

    const changeTemplate = (e: ChangeEvent) => {
        setTemplate(+(e.target as HTMLSelectElement).value);
        localStorage.setItem('templateNumber', (e.target as HTMLSelectElement).value);
        setUndoStack([]);
        setRedoStack([]);
    }

    const handleDragButton = () => {
        setEnableDrag(!enableDrag);
    }

    // Convert CV to PDF
    const generatePDF = () => {

        let loraFonts: HTMLFontFace[] = [{
            family: 'Lora',
            src: [{ format: 'truetype', url: '/fonts/lora/static/Lora-Bold.ttf' }],
            weight: "bold"
        },
        {
            family: 'Lora',
            src: [{ format: 'truetype', url: '/fonts/lora/Lora-VariableFont_wght.ttf' }],
            weight: "normal"
        }
        ]

        const report = new JsPDF("p", "pt", "a4", true);
        // Get the html element using selector
        const cv = document.querySelector("#cv_template") as HTMLElement;
        //To fix the bottom padding issue
        const els = document.querySelectorAll('[data-padding]');
        els.forEach(el => {
            (el as HTMLElement).style.paddingBottom = "1rem";
            (el as HTMLElement).style.paddingTop = "0rem";
        });

        report
            .html(cv, {
                windowWidth: cv.clientWidth + cv.clientWidth / 3,
                width: cv.clientWidth,
                autoPaging: "text",
                fontFaces: [...loraFonts],
                margin: [0, 0, 0, 0],
            })
            .then(() => {
                report.save("cvrush.pdf");
                els.forEach(el => {
                    (el as HTMLElement).style.paddingBottom = "";
                    (el as HTMLElement).style.paddingTop = "";
                });
            });
    };

    return (
        <>
            <Navbar />
            <div className="bg-white p-3 flex shadow-md justify-between gap-4 overflow-visible sticky top-0 z-50">
                <div className="flex justify-start gap-4 lg:gap-8 items-center">
                    <select className="p-2 border shadow rounded-sm" value={templateNumber} onChange={changeTemplate}>
                        {templates.map((temp, i) => <option key={`template-number ${i}`} value={i}> {temp.label} </option>)}
                    </select>
                    <button className="p-1" title="Undo" onClick={undo}><AiOutlineUndo className="scale-125" /><small>Undo</small></button>
                    <button className="p-1" title="Redo" onClick={redo}><AiOutlineRedo className="scale-125" /><small>Redo</small></button>
                    <ColorPicker theme={theme} setTheme={setTheme} />
                    <button className={`p-1 scale-125 ${enableDrag ? "bg-orange-400" : "bg-none"} shadow rounded`} title="Enable drag" onClick={handleDragButton}> <AiOutlineDrag /> </button>
                </div>
                <button className="px-8 py-1 rounded-md text-white bg-slate-900 text-sm" onClick={generatePDF}> Export </button>
            </div>

            <div className="overflow-auto lg:overflow-visible">
                <div className="min-custom-h h-full w-full grid lg:justify-center items-stretch p-4">
                    {
                        templateNumber == 1 ?
                            <Template2 themeColor={theme} /> :
                        templateNumber == 2 ?
                            <Template3 themeColor={theme} /> :
                            templateNumber == 0 ?
                            <Template1 themeColor={theme} /> :
                            ""
                    }
                </div>
            </div>
        </>
    );
}

export default function CVGenV2() {
    return (
        <DragEnableProvider>
            <UndoRedoProvider>
                <V2 />
            </UndoRedoProvider>
        </DragEnableProvider>
    )
};
