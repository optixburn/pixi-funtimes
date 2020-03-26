import React, { useRef } from 'react';
import { Stage } from '@inlet/react-pixi';
import DummyBox from './components/dummybox';
import { STAGE_WIDTH, STAGE_HEIGHT } from './utils/constants';

function App() {
    const dummyRef = useRef(null);

    function handleClick(e) {
        e.preventDefault();
        dummyRef.current.addVel();
    }

    return (
        <Stage className={'padding: 16px;'} width={STAGE_WIDTH} height={STAGE_HEIGHT} options={
            {
            backgroundColor: 0x000000
            }
        }
        onClick={handleClick}>
            <DummyBox ref={dummyRef} />
        </Stage>
    );
}

export default App;
