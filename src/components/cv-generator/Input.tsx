import React, { useEffect, useState } from "react";

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  element?: "textarea" | string;
  props?: any;
}

const Input = ({
  label,
  name,
  placeholder,
  type,
  defaultValue,
  element,
  props,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
  element?: "textarea" | string;
  props?: any;
}) => {

  if (element == "textarea")
    return (
      <div className="py-4">
        {label ? <label> {label}: </label> : ""}
        <textarea
          name={name}
          placeholder={placeholder}
          className="rounded-md p-2 shadow-sm w-full outline-none min-h-[200px]"
          defaultValue={defaultValue}
          {...props}
        ></textarea>
      </div>
    );
  return (
    <div className="py-4">
      {label ? <label> {label}: </label> : ""}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="rounded-md p-2 shadow-sm w-full"
        defaultValue={defaultValue}
        // onChange={changeHandler}
        {...props}
      />
    </div>
  );
};

export default Input;
