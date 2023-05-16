import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Ten (props) {
  const { nodes, materials } = useGLTF("./models/10.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.irides.geometry}
        material={materials.irides}
        // position={[27.48, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./models/10.gltf");