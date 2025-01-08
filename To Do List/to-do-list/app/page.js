"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask=<h2>No Task Available</h2>
  if (mainTask.length>0) {
    renderTask= mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex justify-between mb-8 '>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-m'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)}
      }
      className='bg-red-400 text-white px-4 py-2 rounded font-bold hover:bg-red-600'>Delete</button>
        </li>
      )
    })
  }
  return (
    <>
    <h1 className= " p-5 text-5xl bg-black text-white font-bold text-center">My To Do List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text border-zinc-800 border-2 m-5 px-4 py-2'placeholder='Enter Task Here' value={title}
      onChange={(e)=>{
        setTitle(e.target.value)

      }}/>

      <input type="text" className='text border-zinc-800 border-2 m-5 px-4 py-2'placeholder='Enter Description Here' 
      value={desc}
      onChange={(e)=>{
        setDesc(e.target.value)
         }}   />

      <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>

    </form>
    <hr></hr>
    <div className='p-8 bg-slate-300'>
        <ul>{renderTask}</ul>
    </div>
    </>
  )
}
export default page
