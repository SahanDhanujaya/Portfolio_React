import ErrorIcon from "../../assets/pictures/icons/web.png";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import FuzzyText from "../../animations/texts/fuzzyText/FuzzyText";
import Particles from "../../animations/backgrounds/particles/Particles";

const Error = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, [show]);

  // Define hoverIntensity and enableHover values
  const hoverIntensity = 0.4; // Adjust as needed
  const enableHover = true; // Adjust as needed

  return (
    <div className="bg-black flex justify-center items-center h-dvh text-center relative">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className=" items-center justify-center absolute ">
        <div className="text-center flex justify-center">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
          >
            404
          </FuzzyText>
        </div>
        <div className="flex justify-center">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
          >
            NOT FOUND
          </FuzzyText>
        </div>
      </div>
    </div>
  );
};

export default Error;
