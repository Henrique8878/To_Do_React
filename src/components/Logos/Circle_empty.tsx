import * as React from "react"

interface type_circle_empty{
  className:string,
  onClick?:()=>void
}
export function Circle_Empty({className,onClick}:type_circle_empty){
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      
    >
      <path
        d="M8.964 1.86A7.14 7.14 0 111.824 9a7.168 7.168 0 017.14-7.14zm0-1.587a8.727 8.727 0 10.072 17.454A8.727 8.727 0 008.964.273z"
        fill="#4EA8DE"
      />
    </svg>
  )
}

