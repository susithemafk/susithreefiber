import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Four(props) {
  const { nodes, materials } = useGLTF("./models/4.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blue.geometry}
        material={materials.blue}
        // position={[14.11, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/4.gltf");
