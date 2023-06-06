import { ChangeEvent, useEffect, useState } from "react";
import JsPDF, { HTMLFontFace } from "jspdf";
import { AiOutlineUndo, AiOutlineRedo } from "react-icons/ai"
import UndoRedoProvider, { useUndoRedo } from "../../context/undoRedo";
import ColorPicker from "../../components/ColorPicker";
import Template1 from "../../components/cv-generator/v2/temp1";
import Template2 from "../../components/cv-generator/v2/temp2";
import Template3 from "../../components/cv-generator/v2/temp3";
import Navbar from "../../components/Navbar";

const templates = [
    { label: "General" },
    { label: "Professional" },
    { label: "Elegant" },
];

const V2 = () => {
    const [theme, setTheme] = useState("#4338ca");
    const [templateNumber, setTemplate] = useState(0);
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
            <div className="bg-white p-3 flex shadow-md justify-between gap-4">
                <div className="flex justify-start gap-4 items-center">
                    <select className="p-2 border shadow rounded-sm" value={templateNumber} onChange={changeTemplate}>
                        {templates.map((temp, i) => <option key={`template-number ${i}`} value={i}> {temp.label} </option>)}
                    </select>
                    <button className="p-1" title="Undo" onClick={undo}><AiOutlineUndo className="scale-125" /><small>Undo</small></button>
                    <button className="p-1" title="Redo" onClick={redo}><AiOutlineRedo className="scale-125" /><small>Redo</small></button>
                    <ColorPicker theme={theme} setTheme={setTheme} />
                </div>
                <button className="px-8 py-1 rounded-md text-white bg-slate-900 text-sm" onClick={generatePDF}> Export </button>
            </div>
            <div className="min-custom-h h-full w-full grid justify-center items-stretch p-4">
                {
                    templateNumber == 0 ?
                        <Template2 themeColor={theme} /> :
                    templateNumber == 1 ?
                        <Template3 themeColor={theme} /> :
                        templateNumber == 2 ?
                        <Template1 themeColor={theme} /> :
                        ""
                }
            </div>
        </>
    );
}

export default function CVGenV2() {
    return (
        <UndoRedoProvider>
            <V2 />
        </UndoRedoProvider>
    )
};
