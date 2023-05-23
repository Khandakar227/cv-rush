import { svgToImage } from "../utils";
import { useEffect, useRef, useState } from "react";

interface Props {
    themeColor: string;
}

export default function WaveBgBottom({ themeColor }: Props) {
    const svgRef = useRef({} as SVGSVGElement);
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        svgToImage(svgRef.current, (imgData) => setImgSrc(imgData));
    }, [svgRef.current, themeColor]);

    return (
        <>
            <div>
                <div className="hidden">
                    <svg width="846" ref={svgRef} height="140" viewBox="0 0 846 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 140V1.99999C0 -1.00001 3.4 -1.20001 17 22C34 51 33 57 62 94C91 131 193 74 260 57C327 40 325 47 550 99C730 140.6 822.333 56.3333 846 8.99999V140H0Z" fill={themeColor} />
                    </svg>
                </div>
                <img className="absolute bottom-0 left-0" src={imgSrc} alt="bg" />
            </div>
        </>
    )
}
