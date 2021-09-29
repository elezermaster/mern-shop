import React from 'react'
import Counter from './counter'
//ctr +fn +F2
const Counters = ({counters, onDelete, onIncrement, onDecrement, onReset}) => {
        //console.log('props counters', props)
        console.log('props counters', counters)
        return (
        <div>
            <button
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
                >сброс</button>
            {counters.map(counter => {
                console.log('counter in map', counter)
              return (
                  <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    //value={counter.value}
                    //name={counter.name}
                    //id={counter.id}
                    {...counter}
                    >
                      {/*<h4>{counter.name}</h4>*/}
                    </Counter>
                  )
            })}
        </div>
    )
}

export default Counters;
