
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { SphereEnv } from './SphereEnv'

function App() {

  return (
    <>
    hi
      <SphereEnv />
      <Environment background={false} files={'assets/textures/envmap.hdr'} />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      <OrbitControls target0={[0, 0, 0]}  />
    </>
  )
}

export default App
