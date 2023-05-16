

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Flame = (props) => {
	useGLTF.preload("./models/flame_model.gltf") 

	const { nodes, materials } = useGLTF("./models/flame_model.gltf")

	return (
		<group {...props} dispose={null}>
		<mesh
			castShadow
			receiveShadow
			geometry={nodes.flame.geometry}
			material={materials.flame_metal}
			position={[-0.81, 0, -0.04]}
			rotation={[Math.PI / 2, 0, 0]}
			scale={0.11}
		/>
		</group>
	)
}
 
export default Flame