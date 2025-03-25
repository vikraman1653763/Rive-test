import { useRive, useStateMachineInput } from "rive-react";

const Chars = () => {
    const { rive, RiveComponent } = useRive({
        src: '/assets/char.riv', // Ensure path is correct
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    // Inputs for different animations
    const pokeLeft = useStateMachineInput(rive, "State Machine 1", "Poke Left");
    const pokeRight = useStateMachineInput(rive, "State Machine 1", "Poke Right");
    const smile = useStateMachineInput(rive, "State Machine 1", "Smile");

    // Animation Handlers
    const handleLeftPoke = () => pokeLeft && pokeLeft.fire();
    const handleRightPoke = () => pokeRight && pokeRight.fire();
    const handleSmile = () => smile && (smile.value = !smile.value);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div style={{width:'200px',height:'300px'}}>
                <RiveComponent />
            </div>

           
        </div>
    );
};

export default Chars;
