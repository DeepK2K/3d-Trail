import React from "react";
import { useGLTF, Center } from "@react-three/drei";


export default function Model(props) {
  const { scene } = useGLTF("/Models/Iphone.glb");
  return (
    <Center>
      <primitive object={scene} scale={25} {...props} />
    </Center>
  );
}