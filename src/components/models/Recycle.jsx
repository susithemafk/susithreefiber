import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Recycle = (props) => {
  const { nodes, materials } = useGLTF("./models/recycle.gltf");
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.recycle.geometry}
        material={materials.recycle}
        position={[0,0,0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("./models/recycle.gltf"); 

export default Recycle