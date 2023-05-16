import { Canvas } from '@react-three/fiber'
import styles from './Homepage.module.scss'
import Experience from '../components/Experience' 
import ArrowRight from '../components/ArrowRight' 
import ButtonPrimary from '../components/ButtonPrimary' 
import { Environment, Cloud, Sky, OrbitControls } from '@react-three/drei' 
import MyCamera from '../components/MyCamera' 
import { useEffect, useState, useRef } from 'react' 
import { Eight, EightBall, Five, Four, Nine, One, Seven, Six, Ten, Recycle } from '../components/models'
import Header from '../components/Header' 
import { PresentationControls } from '@react-three/drei' 

import recycleImg from '../assets/images/recycle.png'

import ScrollContainer from 'react-indiana-drag-scroll'



const Homepage = () => {

    const beadWidth = 1.75 


    const [actualIndex, setActualIndex] = useState(0)
    const [modelPositionX, setModelPositionX] = useState(0)
    const [offset, setOffset] = useState(0) 
    

    const defaultBead = [{
        name: 'default', 
        modelWithOffset: <One visible = {false} position = {[offset + beadWidth, 0, 0]} />, 
        model: <One visible = {false} position = {[offset + beadWidth, 0, 0]} />, 
        position: [offset + beadWidth, 0, 0]
    }]  

    const ModelArrayComponent = () => {
        const [modelArray, setModelArray] = useState(defaultBead) 

        return [modelArray, setModelArray]
    } 

    const [modelArray, setModelArray] = ModelArrayComponent()

    // const [modelArray, setModelArray] = useState(defaultBead)
    const [showPreview, setShowPreview] = useState(true) 

    const removeModel = (a) => {

        if (actualIndex + 1 !== modelArray.length) {
            const tempArr = [...modelArray]
            tempArr.splice(actualIndex, 1)
            
            tempArr.map((model, index) => {
                if (index >= actualIndex) {
                    model.modelWithOffset.props.position[0] = model.modelWithOffset.props.position[0] - beadWidth 
                } 
            })
            setOffset(offset - beadWidth) 
            
            setModelArray(tempArr)
        }
    } 

    

    const addModel = (newElement) => {
        setOffset(offset + beadWidth)
        setModelPositionX(modelPositionX - beadWidth) 
        
        let lastObject = modelArray.pop() 
        const newDefault = {
            name: 'default', 
            modelWithOffset: <One visible = {false} position = {[offset + beadWidth, 0, 0]} />, 
            model: <One visible = {false} position = {[offset + beadWidth, 0, 0]} />, 
            position: [offset + beadWidth, 0, 0]
        }
        setModelArray([...modelArray, newElement.model, newDefault])
        
        setActualIndex(actualIndex + 1) 
        setModelPositionX(modelPositionX - beadWidth) 

        console.log(modelPositionX);

        // setModelPositionX(-modelArray[modelArray.length]?.position[0] + beadWidth)
    } 

    const moveLeft = () => {
        if (actualIndex > 0) {
            console.log('moveLeft')
            setModelPositionX(modelPositionX + beadWidth)
            setActualIndex(actualIndex - 1) 
        } 

        console.log(modelPositionX);
    } 
    
    const moveRight = () => {
        if (modelArray[actualIndex+1]) {
            console.log('moveRight')
            setModelPositionX(modelPositionX - beadWidth)
            setActualIndex(actualIndex + 1)
        } 
    } 

    const [zoom, setZoom] = useState(10) 
    const handleZoomChange = (event) => {
        const zoomValue = event.target.value;
        setZoom(zoomValue)
    } 

    useEffect(() => { 
        // console.log('deleted');
        // console.log('hi')
        console.log(modelArray)
        console.log('actualIndex   ' + actualIndex)
        // console.log('modelPositionX   ' + modelPositionX)
        // console.log('offset   ' + offset)
        // console.log('hi')
    }, [modelArray, actualIndex, modelPositionX, offset]) 


    const height = useRef(null)
    const [componentHeight, setComponentHeight] = useState(0)

    useEffect(() => {
        setComponentHeight(height.current.offsetWidth)
    }, []) 

    const replaceModel = (newElement) => {
        if (actualIndex !== modelArray.length - 1) {
            const tempArr = [...modelArray]
            const oldElementPosition = tempArr[actualIndex].modelWithOffset.props.position
            const newModel = {
                ...newElement, 
                position: oldElementPosition, 
                modelWithOffset: <newElement.modelWithOffset.type position = {oldElementPosition} />, 
                model: <newElement.model.type position = {oldElementPosition} />
            }
            tempArr[actualIndex] = newModel
            setModelArray(tempArr)
        }
    }


    const models = [{
        name: 'eightball', 
        modelWithOffset: <EightBall position = {[offset, 0, 0]} />, 
        model: <EightBall position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'one',
        modelWithOffset: <One position = {[offset, 0, 0]} />, 
        model: <One position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'four',
        modelWithOffset: <Four position = {[offset, 0, 0]} />, 
        model: <Four position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'five',
        modelWithOffset: <Five position = {[offset, 0, 0]} />, 
        model: <Five position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'seven',
        modelWithOffset: <Seven position = {[offset, 0, 0]} />, 
        model: <Seven position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'eight',
        modelWithOffset: <Eight position = {[offset, 0, 0]} />, 
        model: <Eight position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }, {
        name: 'ten',
        modelWithOffset: <Ten position = {[offset, 0, 0]} />, 
        model: <Ten position = {[0, 0, 0]} />,
        position: [offset, 0, 0]
    }] 



    return (
        <main id = {styles.homepage}> 

            <Header />

            <section id = {styles.maincanvaswrapper}>

                <Canvas id = {styles.maincanvas}>
                    <MyCamera zoom = {zoom} />
                    {/* <Environment preset="city" />
                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow /> */}

                    <hemisphereLight intensity={0.45} />
                    <spotLight angle={0.4} penumbra={1} position={[20, 30, 2.5]} castShadow shadow-bias={-0.00001} />
                    <directionalLight color="white" position={[-10, -10, 0]} intensity={1.5} />
                    <Cloud scale={.5} position={[5, 5, 0]} />
                    <Cloud scale={.7} position={[-5, 6, 0]} />
                    <Cloud scale={.5} position={[5, -5, 5]} />
                    <Cloud scale={.7} position={[-5, -6, -5]} />
                    <Environment preset="city" />
                    <Sky turbidity={[-100]} />
                    <OrbitControls  />
                    {/* <color attach = {'background'} args = {['#fff']} /> */}
                    {/* <fog attach="fog" args={['#101010', 10, 20]} /> */}
                    <Experience removeModel = {removeModel} modelPositionX = {modelPositionX} modelArray = {modelArray} offset = {offset} showPreview = {showPreview} actualIndex = {actualIndex} />

                </Canvas>

                {/* <label htmlFor="zoom-slider" className = {styles.zoomslider}>
                    <input
                        type="range"
                        id="zoom-slider"
                        min="-10"
                        max="25"
                        step="1"
                        value={zoom}
                        onChange={handleZoomChange}
                    />
                </label> */}

            </section>


            <div id = {styles.controls}>

                    <div className = {`${styles.arrowsandpreview} d-flex justify-content-between px-4 pt-3`}>
                        <button onClick={() => moveLeft()} className = {`${styles.left} mx-2`}>
                            <ArrowRight width = "50" fill = "antiquewhite" className = "ms-auto rotate-180" />
                        </button>

                        <div onClick={() => setShowPreview(!showPreview)} className = {`${styles.preview} mx-2`}>
                            <ButtonPrimary backgroundColor = {'rgb(10, 0, 100)'}>{showPreview ? 'PREVIEW' : 'EDIT'}</ButtonPrimary>
                        </div>
                        <div onClick={removeModel} className = {`${styles.preview} mx-2`}>
                            <ButtonPrimary backgroundColor = {'rgb(204, 0, 30)'}>REMOVE</ButtonPrimary>
                        </div>

                        <button onClick={() => moveRight()} className = {`${styles.right} mx-2`}>
                            <ArrowRight width = "50" fill = "antiquewhite" className = "ms-auto" />
                        </button>
                    </div>
                    
                    {/* <ScrollContainer className = {`${styles.components} d-flex py-4 flex-wrappp px-4`}>

                        {models.map((model, index) => {

                            return (
                                <div className = "px-2 col-3 py-2" key = {index}    >
                                    <button onClick={() => addModel({model})} className = {`${styles.singlemodel} w-100`} ref = {height} style = {{height: `${componentHeight}px`}}>
                                        <Canvas>
                                            <Environment preset="city" />
                                            <ambientLight intensity={1} />
                                                {model.model}
                                        </Canvas>
                                </button>
                                </div>
                            )
                        })}

                    </ScrollContainer> */}
                    <div className = {`${styles.components} d-flex py-4 flex-wrappp px-4`}>

                        {models.map((model, index) => {

                            return (
                                <div className = "px-2 col-3 py-2 position-relative" key = {index}>

                                    {/* <div className = {styles.recyclewrapper} onClick = {() => replaceModel(model)}>
                                        <Canvas>
                                                <Environment preset="city" />
                                                <ambientLight intensity={1} />
                                                <mesh scale = {[1.5,1.5,1.5]} >
                                                    <Recycle />
                                                </mesh>
                                        </Canvas>
                                    </div> */}
                                    <button onClick={() => addModel({model})} className = {`${styles.singlemodel} w-100`} ref = {height} style = {{height: `${componentHeight}px`}}>
                                       
                                        <Canvas>
                                            <PresentationControls 
                                                speed = {1} 
                                                global 
                                                target={[0,0,0]}
                                                zoom = {0.7} 
                                                polar = {[-0.1, Math.PI / 4]} 
                                            >
                                                <Environment preset="city" />
                                                <ambientLight intensity={1} />
                                                <mesh scale = {[1.5,1.5,1.5]} >
                                                    {model.model}
                                                </mesh>
                                            </PresentationControls>
                                        </Canvas>

                                </button>
                                </div>
                            )
                        })}

                    </div>
            </div> 


        </main>
    )
}

export default Homepage 