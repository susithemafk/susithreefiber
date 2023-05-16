import { useThree } from '@react-three/fiber' 



const MyCamera = ({zoom}) => {
    const { camera } = useThree()
    camera.position.set(0, 0, 30 - zoom) 
    camera.rotation.set(10,1,5)
} 

export default MyCamera