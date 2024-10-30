
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { SphereEnv } from './SphereEnv'
import { Landscape } from './Landscape'

function App() {

  return (
    <>
    hi
      <SphereEnv />
      <Environment background={false} files={'assets/textures/envmap.hdr'} />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      <OrbitControls target0={[0, 0, 0]}  />
      <Landscape />

      <directionalLight 
      castShadow
      color={'#ffffff'} 
      shadow-bias={-0.0005}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={20}
      shadow-camera-left={-6.2}
      shadow-camera-right={6.2}
      shadow-camera-top={6}
      shadow-camera-bottom={-6}
      shadow-camera-near={0.1}
      position={[10, 5, 4]} 
      intensity={2} />
    </>
  )
}

export default App
