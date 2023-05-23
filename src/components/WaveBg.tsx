import { svgToImage } from "../utils";
import { useEffect, useRef, useState } from "react";

interface Props {
    themeColor: string;
}

export default function WaveBg({themeColor}:Props) {
    const svgRef = useRef({} as SVGSVGElement);
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        svgToImage(svgRef.current, (imgData) => setImgSrc(imgData));
    }, [svgRef.current, themeColor]);

    return (
    <>
    <div>
        <div className="hidden">
            <svg ref={svgRef} width="798" height="261" className="w-full h-full" viewBox="0 0 798 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="798" height="261"/>
                <path d="M0 261V0H795V4C768.667 7.66667 696.2 23.2 617 56C518 97 533 110 385 140C237 170 182 147 100 189C34.4 222.6 6 251 0 261Z" fill={themeColor}/>
            </svg>
        </div>
        <img className="absolute top-0 left-0" src={imgSrc} alt="bg" />
    </div>
    </>
  )
}
