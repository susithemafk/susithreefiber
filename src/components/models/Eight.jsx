import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Eight (props) {
  const { nodes, materials } = useGLTF("./models/8.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.green.geometry}
        material={materials.green}
        // position={[23.11, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/8.gltf");
