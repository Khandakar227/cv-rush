import React, { ChangeEvent, ImgHTMLAttributes, useRef, useState } from "react";
import ContextMenu from "../ContextMenu";
import { UndoRedoElement, useUndoRedo } from "../../context/undoRedo";

interface CVImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  borderRadius?: number
}

function CVImage(props: CVImageProps) {
  const photoUploadRef = useRef({} as HTMLInputElement);
  const DisplayPhotRef = useRef({} as HTMLImageElement);

  const [displayPhoto, setDisplayPhoto] = useState("");
  const [borderRadius, setBR] = useState(props.borderRadius || 100);
  const [aspectRatio, setAspectRatio] = useState("1");
  const [width, setWidth] = useState(props.width || 140);

  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  const [undoRedoElement, setElement] = useState({} as UndoRedoElement);

  const { addUndo } = useUndoRedo();

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    setShowMenu(true);

    const el = (e.target as HTMLImageElement);

    setMenuPos({
      x: - el.offsetLeft - el.scrollLeft + e.clientX,
      y: - el.offsetTop - el.scrollTop + e.clientY,
    });
  }

  function handleBRChange(e: React.ChangeEvent) {
    setBR(+(e.target as HTMLInputElement).value);
  }

  /**
   * Undo redo feature
   */
  function handleSliderUnclick() {
    setElement({
      ...undoRedoElement,
      to: {
        fx: setBR,
        args: [DisplayPhotRef.current.style.borderRadius.split("%")[0]],
      }
    })
    // Send the undoRedo Element to stack
    addUndo({
      ...undoRedoElement,
      to: {
        fx: setBR,
        args: [DisplayPhotRef.current.style.borderRadius.split("%")[0]],
      }
    });
  }
  /**
   * Undo redo feature
   */
  function handSliderClick() {
    setElement({
      ...undoRedoElement,
      from: {
        fx: setBR,
        args: [DisplayPhotRef.current.style.borderRadius.split("%")[0]],
      },
    })
  }

  /**
   * Need to add undo redo feature
   */
  function changeAspectRatio(ratio: string) {
    setElement({
      from: {
        fx: setAspectRatio,
        args: [DisplayPhotRef.current.style.aspectRatio],
      },
      to: undoRedoElement.to,
    })

    setAspectRatio(ratio);

    setElement({
      from: undoRedoElement.from,
      to: {
        fx: setBR,
        args: [DisplayPhotRef.current.style.aspectRatio],
      }
    })

    // Send the undoRedo Element to stack
    addUndo(undoRedoElement);
  }

  /**
   * Need to add undo redo feature
   */
  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imgData = reader.result as string;
        setDisplayPhoto(imgData);
        //   localStorage.setItem(CVPhotoStorageName, JSON.stringify(imgData));
      };

      reader.readAsDataURL(file);
    }
  };

  const onImageClick = () => {
    photoUploadRef.current.click();
  };

  const changeWidth = (e: ChangeEvent) => {
    setWidth(+(e.target as HTMLInputElement).value);
    setElement({
      ...undoRedoElement,
      from: {
        fx: setWidth,
        args: [width],
      },
      to: {
        fx: setWidth,
        args: [+(e.target as HTMLInputElement).value]
      }
    });
    addUndo({
      ...undoRedoElement,
      from: {
        fx: setWidth,
        args: [width],
      },
      to: {
        fx: setWidth,
        args: [+(e.target as HTMLInputElement).value]
      }
    })
  }
  return (
    <div className="relative z-0">
      <img
        id="displayPhoto"
        ref={DisplayPhotRef}
        style={{ borderRadius: `${borderRadius}%`, aspectRatio: aspectRatio, width: `${width}px` }}
        className={props?.className}
        data-name='imagediv'
        {...props}
        src={displayPhoto || "/images/dp_temp.png"}
        onClick={onImageClick}
        onContextMenu={handleContextMenu}
      />
      <ContextMenu props={{ ...menuPos, show: showMenu, setShowMenu: setShowMenu }}>
        <button
          className="text-sm w-full text-start py-1 hover:bg-gray-300"
          onClick={onImageClick}
        >
          Change photo
        </button>
        <hr />
        <div className="text-xs w-full text-gray-800">Set border radius</div>
        <input
          className="hover:bg-gray-300"
          type="range"
          max={100}
          min={0}
          value={borderRadius}
          onChange={handleBRChange}
          onMouseDown={handSliderClick}
          onMouseUp={handleSliderUnclick}
        />
        <div className="text-sm flex gap-2 justify-start items-center">
          Width:
          <input className="p-2 rounded-md shadow border w-24" value={width} min={0} type="number" onChange={changeWidth} />
        </div>
        <hr />
        <div className="text-xs w-full text-start py-1 text-gray-800">
          Change aspect ratio
        </div>
        <div className="flex gap-1 items-start justify-between">
          <button
            className="text-sm py-1 px-2 hover:bg-gray-300"
            onClick={() => changeAspectRatio("auto")}
          >
            auto
          </button>
          <button
            className="text-sm py-1 px-2 hover:bg-gray-300"
            onClick={() => changeAspectRatio("3/2")}
          >
            3:2
          </button>
          <button
            className="text-sm py-1 px-2 hover:bg-gray-300"
            onClick={() => changeAspectRatio("16/9")}
          >
            16:9
          </button>
          <button
            className="text-sm py-1 px-2 hover:bg-gray-300"
            onClick={() => changeAspectRatio("1/1")}
          >
            1:1
          </button>
        </div>
        <hr />
      </ContextMenu>
      <input
        type="file"
        accept="image/*"
        ref={photoUploadRef}
        onChange={upload}
        className="hidden"
      />
    </div>
  );
}

export default CVImage;