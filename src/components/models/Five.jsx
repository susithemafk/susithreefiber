
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Five(props) {
  const { nodes, materials } = useGLTF("./models/5.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.body}
        // position={[16.61, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/5.gltf");