import { PresentationControls } from '@react-three/drei' 
import styles from '../pages/Homepage.module.scss'


import { Suspense, useEffect, useState } from 'react'
import CreatePreview from './CreatePreview' 

import { ArrowDown, Recycle } from '../components/models' 

const Experience = ({modelPositionX, modelArray, offset, showPreview, actualIndex, removeModel}) => { 

	const [isDeleteRendered, setIsDeleteRendered] = useState(false) 

	let count = 0
	useEffect(() => {
		// if (modelArray[actualIndex + 1]) {
		// 	setIsDeleteRendered(true)
		// } else {
		// 	setIsDeleteRendered(false)
		// }
		document.querySelectorAll('.del').forEach((el) => {
			console.log(count) 
			count++
		})
	}, [modelArray]) 

	if (showPreview) {

	return (
		<Suspense fallback = {null}>

				<group position = {[modelPositionX, 0, 0]}>

					{modelArray.map((model, index) => {

						if (index === actualIndex + 1) {
							count++
							return (
								<mesh key = {index} className = {`${styles.active} del`}>
									{model.modelWithOffset}
									<group scale={[1,1,1]} position = {[modelArray[index - 1].modelWithOffset.props.position[0], 2, 0]} onClick = {() => console.log('clicked delete')} className = {`${styles.delete} del`}>
										{/* <Delete /> */}
										<ArrowDown /> 
										{/* <Recycle /> */}
									</group>
								</mesh>
							) 
						}
						return <mesh key = {index}>{model.modelWithOffset}</mesh>
					})}

				</group> 					

		</Suspense>

	)} else {
		return (
			<CreatePreview modelArray = {modelArray} />
	)}
}

export default Experience