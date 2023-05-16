import { useEffect } from "react";

const CreatePreview = ({modelArray}) => {
	let totalLength = modelArray.length * 1.75

	let angleStep = (2 * Math.PI) / (modelArray.length - 1); // Angle step for each bead
	let radius = totalLength / (2 * Math.PI); // Radius of the circle 

	let positions = modelArray.map((bead, i) => {
		const angle = i * angleStep;
		const x = Math.cos(angle) * radius;
		const y = 0;
		const z = Math.sin(angle) * radius;
		return [x, y, z];
	}) 

	let modelsLength = []
	modelsLength = modelArray.map((model, index) => {
		return [...modelsLength, 2]
	}) 

	let rotations = modelsLength.reduce((acc, length, i) => {
		const angle = i * angleStep;
		const x = 0
		const y = angle + Math.PI / 4
		const z = 0 

		acc.push({ x, y, z })
		return acc 
	}, [])  

	useEffect(() => {
		totalLength = modelArray.length * 1.75

		angleStep = (2 * Math.PI) / (modelArray.length - 1); // Angle step for each bead
		radius = totalLength / (2 * Math.PI); // Radius of the circle
		positions = modelArray.map((bead, i) => {
			const angle = i * angleStep;
			const x = Math.cos(angle) * radius;
			const y = 0;
			const z = Math.sin(angle) * radius;
			return [x, y, z];
		}) 
	
		modelsLength = modelArray.map((model, index) => {
			return [...modelsLength, 2]
		}) 
	
		rotations = modelsLength.reduce((acc, length, i) => {
			const angle = i * angleStep;
			const x = 0
			const y = angle + Math.PI / 4
			const z = 0 
	
			acc.push({ x, y, z })
			return acc 
		}, [])  

		console.log(positions);
	}, [modelArray]) 




	return (
			<group position = {[0, 0, 2]}>
				{modelArray.map((model, index) => {
						return (
							<mesh key = {index} position={positions[index]} rotation={[0, -rotations[index].y + Math.PI / 1.3, 0]}>
								{model.model}
							</mesh>
						)
				})} 
			</group>
	)
}

export default CreatePreview