
interface type_obj_task{
    id:number,
    comment:string,
    isCompleted:boolean
}

interface type_task{
    captureSetNumber:number
    setCaptureSetNumber?:React.Dispatch<React.SetStateAction<number>>
    verifyEmpty?:boolean,
    receiveValueInput:type_obj_task[]
}


export function Task({captureSetNumber,receiveValueInput}:type_task){
    
    return(
        <>
            <article className="w-widthContainers mt-28">
                <div className="flex justify-between border-b pb-6 border-GRAY-400">
                        <div className="flex gap-2">
                            <span className="font-bold text-blue">Tarefas Criadas</span>
                            <span className="bg-GRAY-400 py-0 px-2 rounded-lg text-white font-semibold">{receiveValueInput.length}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold text-purple-dark">Concluídas</span>
                            <span className="bg-GRAY-400 py-0 px-2 rounded-lg text-white font-semibold">{captureSetNumber}</span>
                        </div>
                </div>
            </article>
        </>
    )
}