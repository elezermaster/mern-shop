import React from 'react';
import {ImPlus,ImMinus} from "react-icons/im";
//cmd+fn+f2
const Counter = (props) => {
     console.log('props',props)
    const formCount = () => {
        return props.value === 0 ? "Zero" : props.value
    }
    const getBagecClasses = () => {
        let classes = " badge m-2 bg-"
        classes += props.value === 0 ? 'danger' : 'primary'
        return classes
    }

    const fragmentClass = () => {
        return 'display:"flex";flex-direction:"row"'
    }

    return (
        <React.Fragment >
            <div className={fragmentClass()}>
            <h4>{props.name}</h4>
            {/*renderTags()*/}
            <span className={getBagecClasses()} style={{fontSize: 20}}>{formCount()}</span>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button
                type="button"
                className="btn btn-danger"
                fontSize="20px"
                onClick={() => props.onIncrement(props.id)}
                >
                    <ImPlus/>
                </button>
            <button
                type="button"
                className="btn btn-success"
                fontSize="20px"
                onClick={() => props.onDecrement(props.id)}
                >
                    <ImMinus/>
                </button>
            </div>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
                >Delete</button>
            </div>
        </React.Fragment>
    );
};

export default Counter;
