export function arrayEquals(a: any[], b: any[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

export function drag(elementId:string, translate:string) {
    let el = document.getElementById(elementId);
    if (!el) return;
    el.style.transform = translate;
}

export function svgToImage(svgElement:SVGSVGElement, callBack:(imgData:string)=>void) {
  const rect = svgElement.getBoundingClientRect();
  
  const xml = new XMLSerializer().serializeToString(svgElement);
  const svg64 = 'data:image/svg+xml;base64,' + encodeURIComponent(btoa(xml));
  
  const img = new Image();
  
  img.src = svg64;
  
  document.body.appendChild(img)

  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
    const canvasCtx = canvas.getContext('2d');
    canvasCtx?.drawImage(img, 0, 0);
    
    callBack(canvas.toDataURL('image/png'));
    
    img.style.display = 'none';
  }
}