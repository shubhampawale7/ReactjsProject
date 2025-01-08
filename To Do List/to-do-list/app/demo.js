/*"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <h1 className="p-5 text-5xl bg-black text-white font-bold text-center">
        My To Do List
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ title, desc });
          setTitle("");
          setDesc("");
        }}
      >
        <input
          type="text"
          className="text border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
      </form>
    </>
  );
};

export default Page;
*/
