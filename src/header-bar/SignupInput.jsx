import React from "react";
import { forwardRef } from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
    function handleChange(event) {
        // If props.onChange is provided, call it with the new value
        if (props.onChange) {
            props.onChange(event);
        }
    }
    return (
        <input
            type="tel"
            ref={ref}
            value={props.value}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Enter phone number"
            className={`focus:outline-none ${props.className}`}
        />
    );
});

export default CustomInput;
