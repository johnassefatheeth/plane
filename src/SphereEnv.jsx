import { BackSide, SphereGeometry } from "three";
import { useTexture } from "@react-three/drei";

export function SphereEnv() {
    const texture = useTexture('assets/textures/envmap.jpg')
    return (
        <mesh>
            <sphereGeometry args={[60, 50, 50]} />
            <meshBasicMaterial map={texture} side={BackSide} />
        </mesh>
    )
}