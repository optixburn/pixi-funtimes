import React from 'react';
import * as ReactPixi from '@inlet/react-pixi';
import constants from '../utils/constants'
const { STAGE_WIDTH, STAGE_HEIGHT, FRICTION, BOUNCE } = constants;
const { Sprite, useTick } = ReactPixi;
const { useState, forwardRef, useImperativeHandle } = React;

const DummyBox = forwardRef((props, ref) => {

    const [x, setX] = useState(10);
    const [y, setY] = useState(10);
    const [v, setVel] = useState({x: 30, y:30});
    const width = 12;
    const halfWidth = width*.5;
    const height = 20;
    const halfHeight = height*.5;

    useImperativeHandle(ref, () => ({
        addVel() {
            v.x += Math.random()*60 - 30;
            v.y += Math.random()*60 - 30;
            setVel(v);
        }
    }));

    useTick(delta => {
        // apply friction
        v.x *= FRICTION;
        v.y *= FRICTION;

        // update the coordinates
        setX(x + v.x);
        setY(y + v.y);

        let vxdir = v.x/Math.abs(v.x);
        let vydir = v.y/Math.abs(v.y);

        // apply boundries
        if(x < halfWidth || x > STAGE_WIDTH - halfWidth && v.x !== 0) {
            // inverse the velocity
            // and add in bounce
            vxdir *= -1;
            v.x = vxdir * (BOUNCE * Math.abs(v.x) + halfWidth);
            console.log(`x bounce vel: ${v.x}`);
            setX(x + v.x);
        }

        if(y < halfHeight || y > STAGE_HEIGHT - halfHeight && v.y !== 0) {
            // inverse the velocity
            // and add in bounce
            vydir *= -1;
            v.y = vydir * (BOUNCE * Math.abs(v.y) + halfHeight);
            console.log(`y bounce vel: ${v.y}`);
            setY(y + v.y);
        }
        setVel(v);
    })

    return(
        <Sprite
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
            anchor={0.5}
            x={x}
            y={y}
        />
    );
});

export default DummyBox;