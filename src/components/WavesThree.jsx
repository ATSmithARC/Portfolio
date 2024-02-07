import React, { useRef, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { createNoise3D } from "simplex-noise";

const parameters = {
  factor: 0.03,
  variation: 0.015,
  lines: 15,
  speed: 0.0005,
  subdiv: 25,
};
const cameraProps = { zoom: 1, near: 0.1, far: 9999, position: [0, 0, 100] };
const noise3D = createNoise3D();

const randomness = Array.from(
  { length: parameters.lines },
  (_, i) => i * parameters.factor
);

const WavesThree = () => {
  const lineRefs = Array.from({ length: parameters.lines }).map(() => useRef());

  const WaveLines = () => {
    const { size } = useThree();
    const subsize = Math.ceil(size.width / parameters.subdiv);
    console.log(subsize);
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
              x * parameters.subdiv - size.width / 2,
              (amplitude + random) * randomY,
              0
            )
          );
        }
        lineRefs[i].current.geometry.setFromPoints(pts);
        randomness[i] += parameters.speed;
      }
    };

    useFrame(() => drawPaths(randomness));
    return (
      <>
        {lineRefs.map((ref, index) => (
          <line key={index} ref={ref}>
            <bufferGeometry attach="geometry" />
            <lineBasicMaterial attach="material" color={`darkred`} linewidth={1} />
          </line>
        ))}
      </>
    );
  };

  return (
    <div id="canvas-container">
      <Canvas camera={cameraProps} orthographic={true}>
        <WaveLines />
      </Canvas>
    </div>
  );
};

export default WavesThree;
