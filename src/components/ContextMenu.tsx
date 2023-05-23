import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

interface ContextMenuProps {
  x: number,
  y: number,
  show?: boolean,
  underTransform?: boolean,
  setShowMenu: Dispatch<SetStateAction<boolean>>,
}
function ContextMenu({ children, props }: { children: ReactNode | ReactNode[], props: ContextMenuProps }) {

  //Handle context menu close
  const handleClose = () => {
    props.setShowMenu(false);
  }
  return (
    <>
      {props.show ? (
        <div className='absolute z-10 top-0 left-0 right-0 bottom-0'>
          <div className="fixed top-0 bottom-0 left-0 right-0" onClick={handleClose} onContextMenu={handleClose} />
          <div
            style={props.underTransform ? { top: '50%', left: '50%' } : { top: `${props.y}px`, left: `${props.x}px` }}
            className='p-2 fixed z-10 shadow rounded bg-white text-black min-w-[150px] top-0 left-0'
          >
            {children}
          </div>
        </div>
      ) : ""}
    </>
  )
}

export default ContextMenu