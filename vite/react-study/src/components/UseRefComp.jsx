import React, {useRef, useStata} from 'react';

function UseRefComp(props) {
    const inputEl = useRef(null)
    function changeStyle(){
        if(inputEl.current){
            inputEl.current.style.backgroundColor = 'orange'
            inputEl.current.style.color = 'white'
            inputEl.current.style.padding = '20px'
        }
    }
    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={changeStyle}>Change style</button>
        </div>
    );
}

export default UseRefComp;