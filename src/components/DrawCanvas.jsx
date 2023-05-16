
import React, { useEffect, useRef } from 'react' 

const canvasStyle = {
	border: '1px solid black',
} 

const DrawCanvas = ({width, height, className}) => { 

	const canvasRef = useRef(null)

	// useEffect(() => {
	// 	console.log(canvasRef)
	// }, [])

	return (
		<canvas 
			// ref = {canvasRef}
			// className = {className}
			// width = {width}
			// height = {height} 
			// style = {canvasStyle}	
		>


		</canvas>
	)
}

export default DrawCanvas