import { useState, useEffect } from "react";
import { useRive } from "rive-react";

const Tests = () => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/char.riv",
    autoplay: true,
  });

  const [animations, setAnimations] = useState([]);
  const [stateMachines, setStateMachines] = useState([]);


  useEffect(() => {
    if (rive) {
      setAnimations(rive.animationNames || []);
      setStateMachines(rive.stateMachineNames || []);
      console.log("Aninamte: ", rive.animationNames);
      console.log("State machine: ", rive.stateMachineNames);
    }
  }, [rive]);

  return (
    <div>
      <div>
        <h2>Animations:</h2>
        <ul>
          {animations.map((anim, index) => (
            <li key={index}>{anim}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>State Machines:</h2>
        <ul>
          {stateMachines.map((sm, index) => (
            <li key={index}>{sm}</li>
          ))}
        </ul>
      </div>
      {RiveComponent && <RiveComponent />}
    </div>
  );
};

export default Tests;
