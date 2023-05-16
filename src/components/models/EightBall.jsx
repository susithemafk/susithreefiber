
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const EightBall = (props) => {
  useGLTF.preload("./models/8ball_model.gltf") 

  const { nodes, materials } = useGLTF("./models/8ball_model.gltf") 

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
    
  ) 
}


export default EightBall