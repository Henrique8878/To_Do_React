import { Input_Button } from "./input_button"
import img from "../assets/Clipboard.png"
import { Task } from "./Task"
import { New_Task } from "./New_Task"
import { useEffect, useState } from "react"

export function Section(){

    interface type_obj_task{
        id:number,
        comment:string,
        isCompleted:boolean
    }
    const [receiveValueInput,setReceiveValueInput] = useState<type_obj_task[]>([])
    const [isEmpty,setIsEmpty] = useState(true)
    const [verifyEmpty,setVerifyEmpty] = useState(false)
    const [captureSetNumber,setCaptureSetNumber] = useState(0)


    useEffect(()=>{
        if(receiveValueInput.length!=0){
            setIsEmpty(false)
        }else{
            setIsEmpty(true)
        }
    },[receiveValueInput])
    return(
        <>
            <section className=" flex flex-col  items-center bg-GRAY-600 relative">
                <Input_Button 
                    receiveValueInput = {receiveValueInput} 
                    setReceiveValueInput = {setReceiveValueInput}
                />
                <Task 
                    receiveValueInput = {receiveValueInput} 
                    verifyEmpty = {verifyEmpty}
                    captureSetNumber = {captureSetNumber}
                    setCaptureSetNumber = {setCaptureSetNumber}
                />
                    
            {isEmpty?
                <div className="flex flex-col items-center justify-center w-[46rem] h-[15.25rem]">
                <img src={img} alt="" className="h-[3.5rem] w-[3.5rem] mb-3"/>
                <strong className="font-bold text-GRAY-300">Você ainda não tem tarefas cadastradas</strong>
                <span className="font-light text-GRAY-300">Crie tarefas e organize seus itens a fazer</span>
                </div>
                    :
                receiveValueInput.map((obj_comment)=>(
                    <New_Task 
                        key={obj_comment.id} valueID = {obj_comment.id} 
                        verifyEmpty = {verifyEmpty} setVerifyEmpty = 
                        {setVerifyEmpty} isCompleted = {obj_comment.isCompleted}
                        setReceiveValueInput = {setReceiveValueInput} 
                        receiveValueInput = {receiveValueInput}  comment = {obj_comment.comment}
                        setCaptureSetNumber = {setCaptureSetNumber}
                        captureSetNumber = {captureSetNumber}
                    />
                ))
            }
                    
            </section>

        </>
    )
}