import { useRef } from 'react';
import { Mesh } from 'three'
import { Canvas as ThreeCanvas, useFrame } from '@react-three/fiber';
import { useTime } from 'framer-motion'

import useColorTheme from "@/hooks/useColorTheme";
import styled from 'styled-components';


const Content = () => {
  const coinRef = useRef<Mesh>(null);
  const colors = useColorTheme();
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      1,
      1,
      time.get() * 0.0001
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <mesh scale={3} ref={coinRef}>
        <icosahedronGeometry args={[10, 1]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color={colors.primary} />
      </mesh>
    </>
  )
}

const Geometry = () => {
  return (
    <CanvasWrapper>
      <ThreeCanvas >
        <Content />
      </ThreeCanvas>
    </CanvasWrapper>
  );
}

export default Geometry;

const CanvasWrapper = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
`;