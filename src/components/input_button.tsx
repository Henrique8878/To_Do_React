import { ChangeEvent, FormEvent, useState } from "react"
import { LogoPlus } from "./Logos/logoPlus"

interface type_Input_Button{
    receiveValueInput:type_obj_task[]
    setReceiveValueInput:React.Dispatch<React.SetStateAction<type_obj_task[]>>
}

interface type_obj_task{
    id:number,
    comment:string,
    isCompleted:boolean
}
export function Input_Button({setReceiveValueInput,receiveValueInput}:type_Input_Button){
    const [valueInput,setValueInput] = useState("")

    function handleChangeInput(e:ChangeEvent){
        const target = e.target as HTMLInputElement
        setValueInput(target.value)
    }

    function sendForm(e:FormEvent){
        e.preventDefault()
            try{
                if(valueInput==""){
                    throw new Error(`Adicione uma tarefa`)
                }else{
                    const new_object:type_obj_task = {
                        id:new Date().getTime(),
                        comment:valueInput,
                        isCompleted:false
                    }
                    setReceiveValueInput([...receiveValueInput,new_object])
                    setValueInput("")
                }
            }catch(e){
                alert(`${e}`)
            }
    }
    
    return(
        <>
            <form onSubmit={sendForm} className="flex w-widthContainers gap-2 absolute top-[-25px]">
                <input type="text" className="w-[39.875rem] h-[3.375rem] pl-4 rounded-md bg-GRAY-500 placeholder:text-GRAY-300 focus:outline-none text-white font-normal" placeholder="Adicione uma nova tarefa" onChange={handleChangeInput} value={valueInput}/>
                <button type = "submit" className="flex items-center justify-center gap-2 rounded-md w-[5.625rem] h-[3.375rem font-bold text-white bg-blue">
                    <span>Criar</span>
                    <LogoPlus/>
                </button>
            </form>
        </>
    )
}