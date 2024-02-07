import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { createNoise3D } from "simplex-noise";
import { Line } from "@react-three/drei";
extend({ Line });

const WavesThree = () => {
  const parameters = {
    factor: 0.037,
    variation: 0.01,
    lines: 10,
    speed: 0.001,
  };
  const noise3D = createNoise3D();
  const lineRef = useRef([]);
  const subdiv = 20;

  const setupRandomness = () => {
    return Array.from(
      { length: parameters.lines },
      (_, i) => i * parameters.factor
    );
  };

  const WaveLines = () => {
    const { size } = useThree();
    const subsize = Math.ceil(size.width / subdiv);
    const amplitude = size.height / 2;

    const drawPaths = (randomness) => {
      for (let i = 0; i < parameters.lines; i++) {
        let pts = [];
        let randomY = 0;
        for (let x = 0; x <= subsize; x++) {
          randomY = noise3D(
            x * parameters.variation + randomness[i],
            x * parameters.variation,
            1
          );
          var random = Math.random() * 0.005;
          pts.push(
            new Vector3(
              x * subdiv - size.width / 2,
              (amplitude + random) * randomY,
              0
            )
          );
        }
        lineRef.current.geometry.setFromPoints(pts);
        randomness[i] += parameters.speed;
      }
    };

    const randomness = useMemo(() => setupRandomness(), []);
    useFrame(() => drawPaths(randomness));

    return (
      <>
        <line  ref={lineRef}>
          <bufferGeometry attach="geometry" />
          <lineBasicMaterial attach="material" color={`black`} linewidth={1} />
        </line>
      </>
    );
  };

  return (
    <div id="canvas-container">
      <Canvas
        camera={{ zoom: 1, near: 0.1, far: 9999, position: [0, 0, 100] }}
        orthographic={true}
      >
        <WaveLines />
      </Canvas>
    </div>
  );
};
export default WavesThree;
