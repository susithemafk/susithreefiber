import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Six (props) {
  const { nodes, materials } = useGLTF("./models/6.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.red.geometry}
        material={materials.red}
        position={[18.94, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/6.gltf");
