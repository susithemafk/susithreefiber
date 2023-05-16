import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Nine (props) {
  const { nodes, materials } = useGLTF("./models/9.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.purple.geometry}
        material={materials.purple}
        position={[25.28, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/9.gltf");
