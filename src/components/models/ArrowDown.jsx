import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei"; 
import { useFrame } from '@react-three/fiber'; 
import { useRef } from 'react';



const Model = (props) => {
    const { nodes, materials } = useGLTF("./models/arrowdown.gltf");

    const meshRef = useRef(); 

	// useFrame is called every frame
	useFrame(({ clock }) => {
		// Rotate the mesh around the y-axis
		meshRef.current.rotation.z = clock.elapsedTime * 2;
	});

    return (
        <Float 
            speed = {0}
            rotationIntensity = {1}  
            floatIntensity = {1} 
            floatingRange = {[0, 1, 0]}
        >
          <group {...props} dispose={null}>
              <mesh
                  ref={meshRef}
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane.geometry}
                  material={materials.arrowmaterial}
                  position={[0, 0.5, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                  scale={[0.29, 1, 1]}
              />
            </group>
        </Float>
    );
}

useGLTF.preload("./models/arrowdown.gltf");

export default Model;