import {useRive, useStateMachineInput} from "rive-react";

const PlayBtn=()=>{
     const SMname = "button"
    const INname = "buttonListener"
    const {rive , RiveComponent} = useRive({
        src:'/assets/play.riv',
        stateMachines: SMname,
        autoplay:true
    })
    const onclickInput = useStateMachineInput(rive ,  SMname , INname)
 
    return(
        <RiveComponent 
        onClick={()=>onclickInput.fire()}
        />

    )
}

export default PlayBtn