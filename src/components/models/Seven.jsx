import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Seven (props) {
  const { nodes, materials } = useGLTF("./models/7.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tyrkys.geometry}
        material={materials.tyrkys}
        // position={[21.17, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/7.gltf");