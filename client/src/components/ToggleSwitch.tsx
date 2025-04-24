import React, { useState } from "react";

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultChecked = false,
  onChange,
  id,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
      <input
        type="checkbox"
        id={id}
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
          checked ? "bg-[#ef4444]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 ease-in-out transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
