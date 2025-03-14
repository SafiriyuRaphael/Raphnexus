import React from 'react'

export default function SlideSelectProps({homepage,setHomepage}:SlideSelectProps) {
  return (
    <div className="index absolute bottom-3 left-1/2 flex gap-2 transform cursor-pointer -translate-x-1/2 z-40">
    <div className={`rounded-full cursor-pointer size-4 border-2   border-amber-400 ${homepage===0?"bg-amber-400": ""}`}
    onClick={()=>setHomepage(0)}></div>
    <div className={`rounded-full size-4 border-2 cursor-pointer border-amber-400  ${homepage===1?"bg-amber-400": ""}`} onClick={()=>setHomepage(1)}></div>
  </div>
  )
}
