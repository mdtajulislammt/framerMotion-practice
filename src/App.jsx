import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  console.log(isOn);

  useEffect(() => {
    const animation = animate(count, 79, { duration: 2 });

    return animation.stop;
  }, [count]);
  return (
    <div className="px-20 py-10 ">
      <h1 className=" text-3xl font-bold  mb-10 text-center">
        Framer Motion Practice
      </h1>

      <div className=" grid grid-cols-4 gap-10 ">
        {/* 1st motion */}
        <div>
          <h1 className=" text-2xl ">Transitions Motion</h1>

          <motion.div
            className=" w-52 h-52 bg-blue-300 mt-4 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className=" mx-auto p-20">Motion</h2>
          </motion.div>
        </div>
        {/* 2nd motion */}
        <div>
          <h1 className=" text-2xl">Keyframes Motion</h1>

          <motion.div
            className=" w-52 h-52 bg-blue-300 mt-4 text-center rounded-full  "
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeIn",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
          >
            {" "}
            <h2 className=" mx-auto p-20">Motion</h2>
          </motion.div>
        </div>
        {/* 3rd motion */}
        <div>
          <h1 className=" text-2xl">Keyframes Motion</h1>
          <motion.div
            className=" w-52 h-52 bg-blue-300 mt-4 text-center cursor-pointer rounded-full "
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.5 }}
          >
            <h2 className=" mx-auto p-20">Motion</h2>
          </motion.div>
        </div>
        {/* 4th motion */}
        <div>
          <h1 className=" text-2xl">Keyframes Motion</h1>
          <div className=" w-52 h-52 bg-blue-300 mt-4 text-center cursor-pointer rounded-full text-2xl font-bold  ">
            <div className="p-20 flex items-center">
              <span>+</span>
              <motion.h1>{rounded}</motion.h1>
            </div>
          </div>
        </div>
        {/* 5th motion */}
        <div>
        <h1 className=" text-2xl mb-2">Button Motion</h1>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
