import {useRive, useStateMachineInput} from "rive-react";

const Hamburger=()=>{
    const SMname = "Basic State Machine"
    const INname = "Switch"
    const {rive , RiveComponent} = useRive({
        src:'/assets/time.riv',
        stateMachines: SMname,
        autoplay:true
    })
    const onclickInput = useStateMachineInput(rive ,  SMname , INname)
 
    return(
        <RiveComponent 
        style={{width:'200px',height:'300px'}}
        onClick={()=>onclickInput.fire()}
        />

    )
}

export default Hamburger