import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function One (props) {
  const { nodes, materials } = useGLTF("./models/1.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.red1.geometry}
        material={materials["Black and Red Patterned  Glass"]}
        // position={[7.24, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/1.gltf");
