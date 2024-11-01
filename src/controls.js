export let controls={};


window.addEventListener('keydown', (e) => {
    controls[e.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (e) => {
    controls[e.key.toLowerCase()] = false;
});


let jawV=0;
let pitchV=0;
let planeV=0.03;


export function updatePlane(x,y,z, planePosition,camera){
    jawV=0;
    pitchV=0;

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

    x.applyAxisAngle( z, jawV );
    y.applyAxisAngle( z, jawV );


    y.applyAxisAngle( x, pitchV );
    z.applyAxisAngle( x, pitchV );


    x.normalize();
    y.normalize();
    z.normalize();


    planePosition.add( z.clone().multiplyScalar( -planeV ) );
}