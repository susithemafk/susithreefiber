import React from "react";
import { useGLTF } from "@react-three/drei";

const Delete = (props) => {

  const { nodes, materials } = useGLTF("./models/delete.gltf");
  return (
    <group {...props} dispose={null}>
      {/* <group position={[-8.59, 0, 0]} rotation={[Math.PI / 2, 0, 0]}> */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.red}
        />
      </group>
      {props.children}
    </group>
  );
}

useGLTF.preload("./models/delete.gltf");

export default Delete;