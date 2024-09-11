import { useEffect, useState } from "react"
import { Circle_Empty } from "./Logos/Circle_empty"
import { Circle } from "./Logos/Circle"
import { Trash } from "./Logos/Trash"

interface type_obj_task{
    id:number,
    comment:string,
    isCompleted:boolean
}

interface new_task{
    valueID:number
    verifyEmpty:boolean
    setVerifyEmpty:React.Dispatch<React.SetStateAction<boolean>>
    setReceiveValueInput:React.Dispatch<React.SetStateAction<type_obj_task[]>>
    isCompleted:boolean
    receiveValueInput:type_obj_task[]
    comment:string
    setCaptureSetNumber:React.Dispatch<React.SetStateAction<number>>
    captureSetNumber:number
}

export function New_Task(props:new_task){

    const [isCompleted,setIsCompleted] = useState(false)
    useEffect(()=>{
        props.setVerifyEmpty(isCompleted)
    },[isCompleted])

    function completeTask(){
        setIsCompleted(!isCompleted)
       if(props.receiveValueInput){ 
            if(isCompleted==true){
                props.setCaptureSetNumber(prevNumber=>prevNumber-1)
            }else{
                props.setCaptureSetNumber(prevNumber=>prevNumber+1)
            }

            for(let i = 0;i<props.receiveValueInput.length;i++){
                if(props.valueID==props.receiveValueInput[i].id){
                    props.receiveValueInput[i].isCompleted=!isCompleted
                }
            }

        }
        
    }

    function deleteTask(id:number){
        console.log("clicou")
        const filter = props.receiveValueInput.filter((element)=>element.id!==id)
            for(let i = 0;i<props.receiveValueInput.length;i++){
                if(props.receiveValueInput[i].id==id){
                    if(props.receiveValueInput[i].isCompleted==true){
                        props.setCaptureSetNumber(previousNumber => previousNumber-1)
                    }
                }
            }
       
        props.setReceiveValueInput(filter)
    }
    return(
        <>
            <div className="flex flex-col gap-3">
                <article className="flex items-center justify-between w-widthContainers h-[4.5rem] gap-2 px-4 bg-GRAY-500 rounded-md">
                    {isCompleted?
                        <>
                            <Circle className="cursor-pointer" onClick={completeTask}/>
                            <span className="text-GRAY-300 font-normal line-through">{props.comment}</span>
                        </>
                            :
                        <>
                            <Circle_Empty className="cursor-pointer" onClick={completeTask}/>
                            <span className="text-GRAY-200 font-normal">{props.comment}</span>
                        </>
                    }
                        <Trash onClick = {()=>deleteTask(props.valueID)} className = "cursor-pointer"/>
                </article>
            </div>
            
        </>
    )
}