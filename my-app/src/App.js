import React, {Suspense, useCallback, useMemo, useRef} from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import {Container} from "reactstrap";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import {Canvas, extend, useFrame, useLoader, useThree} from "react-three-fiber";
import circleImg from './assets/circle.png';
extend({OrbitControls})

function CameraControls(){
    const {
        camera,
        gl: {domElement}
    } = useThree();

    const controlsRef = useRef();
    useFrame(() => controlsRef.current.update())

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate={true}
            autoRotateSpeed={-0.2}
        />
    );
}
const Points = () => {
    const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const bufferRef = useRef();

    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 100
    const sep = 3
    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 15

        const positions = bufferRef.current.array;

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);

                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attachObject={['attributes', 'position']}
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0x00AAFF}
                size={0.5}
                sizeAttenuation={true}
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    );
}

const AnimationCanvas = () =>{
    return (
        <Canvas    colormanagement={false}
                   camera={{ position: [100, 10, 0], fov: 75 }}
                   manualCameraControls={true}>
            {/*<Suspense fallback={null}>*/}
                <Points />
            {/*</Suspense>*/}
            <CameraControls/>
        </Canvas>
    );
}

const App = () =>{
  return (
      <MainAppStyle>
          {/*<Header/>*/}
          <div className="anim">
              {/*<Suspense fallback={<div>Loading...</div>}>*/}
                  <AnimationCanvas/>
              {/*</Suspense>*/}
          </div>
          {/*<Container>*/}
          {/*    <h4>Hello, I'm Mono. A Passionate Software Engineer.</h4>*/}
          {/*</Container>*/}
</MainAppStyle>
)
    ;
}

const MainAppStyle = styled.div`
    position: relative;
    background-color: #000;
    //top: 30vh;
    color: #fff;
    text-align: center;
    h4{
        font-size: 16px;
    }
    .anim {
        //width: 100vw;
        //height: 100vh;
        height: 100vh;
        background-color: black;
    }
`;

export default App;
