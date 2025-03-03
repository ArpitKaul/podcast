import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import headphone from "/src/assets/headphones.png";
import Headphone from "../Components/Navbar/Headphone";
import CanvasLoader from "../Components/Navbar/CanvasLoader";
import { Environment, OrbitControls } from "@react-three/drei";

const Home = () => {
  const [rotation, setRotation] = useState([0.12, 0.39, 0]);
  const modelRef = useRef();

  const onPointerDown = (e) => {
    const initialRotation = rotation[1];
    const startX = e.clientX;

    const onPointerMove = (e) => {
      const deltaX = e.clientX - startX;
      const newRotationY = initialRotation + deltaX * 0.01;
      setRotation([rotation[0], newRotationY, rotation[2]]);
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const Animation = () => {
    const time = useRef(0);
    useFrame(() => {
      time.current += 0.01;
      if (modelRef.current && modelRef.current.position) {
        modelRef.current.position.y = -0.9 + Math.sin(time.current) * 0.1;
      }
    });
    return null;
  };

  return (
    <div className="md:px-12 px-4 h-screen flex flex-col items-center md:pt- pt-10 md:mt-2">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="lg:w-5/6 w-full text-center md:text-left md:ml-12">
          <h1 className="lg:text-7xl md:text-6xl text-3xl font-bold leading-tight text-gray-200 font-serif md:ml-16">
            Create & listen to the <br />
            <span className="inline-flex items-center">
              p
              <img
                src={headphone}
                alt="headphones"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 mx-1 pt-2"
              />
              dcast
            </span>
          </h1>
        </div>
        <div className="lg:block hidden w-1/6 md:w-auto">
          <div className="py-2 px-4 border border-black font-semibold rounded-full text-center bg-white -rotate-90 text-sm md:text-base md:mt-6">
            Scroll Down
          </div>
        </div>
      </div>

      <div className="md:w-1/3 h-[50rem] flex items-center justify-center">
        <Canvas className="md:w-2/3 w-full h-full " shadows camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={<CanvasLoader />}>
            <Headphone
              ref={modelRef}
              position={[0, -0.9, 0]}
              rotation={[rotation[0], rotation[1] + (11 * Math.PI) / 180, rotation[2]]}
              scale={[1.1, 1.1, 1.1]}
              onPointerDown={onPointerDown}
            >
              <meshStandardMaterial
                metalness={0.8}
                roughness={0.2}
                color="#ffd700"
                envMapIntensity={1}
              />
            </Headphone>
            <Animation />
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} castShadow />
            <directionalLight position={[-1, -1, -1]} intensity={0.5} color="#ffccaa" />
            <Environment preset="apartment" />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>

      <div className="mt-1 flex flex-col lg:flex-row w-full md:items-center md:justify-between text-center md:text-left">
        <div className="max-w-lg ">
          <p className="md:text-xl text-base font-serif font-semibold text-gray-400 bg">
            Listen to the most podcasts on just one platform - <b>PODCASTER</b>
          </p>
          <button className="px-6 py-3 md:py-4 bg-amber-300 text-black cursor-pointer font-semibold rounded-full mt-4">
            Login to listen
          </button>
        </div>
      </div>

      <div className="lg:mt-0 mt-8 w-full text-center md:text-right">
        <p className="text-yellow-200 font-bold md:ml-[64em] md:text-right text-sm md:text-base">
          Our app contains more than 2000 podcasts for you
        </p>
      </div>
    </div>
  );
};

export default Home;