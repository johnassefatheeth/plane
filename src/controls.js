import { max } from "three/webgpu";
import { planePostion } from "./Airplane";

export let controls={};


window.addEventListener('keydown', (e) => {
    controls[e.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (e) => {
    controls[e.key.toLowerCase()] = false;
});

function easeOutQuad(t) {
     return 1- (1 - t)*(1 - t);
     }
let jawV=0;
let pitchV=0;
let planeV=0.03;
let maxV=0.04;
export let turbo=0;



export function updatePlane(x,y,z, planePosition,camera){
    jawV *=0.95;
    pitchV *=0.95;

    if(Math.abs(jawV)>maxV)
        jawV=Math.sign(jawV)*maxV;

    if(Math.abs(pitchV)>maxV)
        pitchV=Math.sign(pitchV)*maxV;

    if(controls['a']){
        jawV=0.025;
    }
    if(controls['d']){
        jawV=-0.025;
    }
    if(controls['w']){
        pitchV=-0.025;
    }
    if(controls['s']){
        pitchV=0.025;
    }
    if(controls['r']){
        jawV=0;
        pitchV=0;
        turbo=0;
        x.set(1,0,0);
        y.set(0,1,0);
        z.set(0,0,1);
        planePosition.set(0,2,17);
    }

    x.applyAxisAngle( z, jawV );
    y.applyAxisAngle( z, jawV );


    y.applyAxisAngle( x, pitchV );
    z.applyAxisAngle( x, pitchV );


    x.normalize();
    y.normalize();
    z.normalize();

    if(controls.shift){
        turbo +=0.25;
    } else {
        turbo *=0.95;
    }
    turbo=Math.min(Math.max(turbo,0),1);

    let turboV=easeOutQuad(turbo)*0.02;

    camera.fov=45+turboV*900;
    camera.updateProjectionMatrix();


    planePosition.add( z.clone().multiplyScalar( -planeV -turboV) );
}