import { useState } from "react";
import { MdDelete } from "react-icons/md";

type TodoProp = {
  text: string;
  remove: (text: string) => void;
};

export default function Todo({ text, remove }: TodoProp) {
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className="mt-5 p-2 bg-white rounded-md shadow-md flex align-middle"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <p className="flex-1">{text}</p>
      <div
        className={`flex justify-center items-center ${
          showButton ? "opacity-100" : "opacity-0"
        } cursor-pointer hover:text-red-500 text-gray-300`}
        onClick={() => remove(text)}
      >
        <MdDelete />
      </div>
    </div>
  );
}
