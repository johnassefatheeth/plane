import { BackSide, SphereGeometry } from "three";

export function SphereEnv() {
    const texture = useLoader(THREE.TextureLoader, '/assets/textures/envmap.hdr')
    return (
        <>
        <SphereGeometry args={[60,50,50]} />
        <meshBasicMaterial attach="material" map={texture} side={BackSide} />
        </>
    )
}