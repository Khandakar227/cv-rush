import React, { HTMLAttributes, useId } from "react";

interface DEDivProps extends HTMLAttributes<HTMLDivElement> {}

const EditDiv: React.FC<DEDivProps> = ({ children, ...props }: DEDivProps) => {
  const id = useId();
  return (
    <div id={id} contentEditable suppressContentEditableWarning {...props}>
      {children}
    </div>
  );
};

export default EditDiv;
