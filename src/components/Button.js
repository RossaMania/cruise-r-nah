import React from 'react'

const Button = (text) => {
  return (
    <div>
      <button className="bg-red-700 p-2 text-bold text-slate-100">
      {text}
      </button>
    </div>
  );
}

export default Button