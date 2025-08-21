import React from "react";
import { useGLTF,Center } from "@react-three/drei";

export default function Model() {
  const model = useGLTF(`${import.meta.env.BASE_URL}Models/Iphone.glb`);

  return (
    <Center>
      <primitive object={model.scene} scale={25} position={[0, 0, 0]} />
    </Center>
  );
}