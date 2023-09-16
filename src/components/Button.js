import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-red-700 p-2 font-bold text-slate-100"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button