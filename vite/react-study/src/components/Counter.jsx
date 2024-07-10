import React, {useState} from 'react';


function Counter(props) {

    let data = 0;
    let [counterValue, setCounterValue] = useState(0);
    function upValue(){
        setCounterValue(counterValue=>counterValue+1);
    }
    function downValue(){
        setCounterValue(counterValue=>counterValue-1);
    }
    let [showBlock, setShowBlock] = useState(false);
    function changeVisibe(){
        setShowBlock(showBlock=>!showBlock)
    }
    let [userName, setUserName] = useState('');
    function changeUserName(e){
        setUserName(e.target.value)
    }
    return (
        <div>
            <input type="text" value={userName} onChange={(e)=>{changeUserName(e)}} />
            <p>
                {userName}
            </p>
            <button onClick={upValue}>
                +
            </button>
            <span>
                {/* {counterValue} */}
                {counterValue>0?counterValue:'Low value'}
            </span>
            <button onClick={downValue}>
                -
            </button>

            <div>
                <button onClick={changeVisibe}>
                    {showBlock?'Hide':'Open'}
                </button>
                {showBlock && <div>Hello !</div>}
            </div>
            
        </div>
    );
}

export default Counter;