"use client";
import React from "react";
import { useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl font-bold">{count}</p>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
        >
          increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default CounterPage;