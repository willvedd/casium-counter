import React from 'react';
import Message from 'casium/message';
import { container } from 'casium/app';

class Increment extends Message {}
class Decrement extends Message {}
class Reset extends Message {}
class ExplicitlySet extends Message {}

export default container({

  init: function(){
    console.info("Init");
    return {
      count: 0
    }
  },

  update: [
    [Increment, ({ count }) => ({ count: count + 1 })],
    [Decrement, ({ count }) => ({ count: count - 1 })],
    [Reset, () => ({ count: 0 })],
    [ExplicitlySet, ({count},event) => {
      if(event.value !== "")return ({ count: parseInt(event.value) })
      else return ({count: count});
    }],
  ],

  view: ({ emit, count }) => {
    console.info("count",count);
    console.log("emit",emit);
    return (
      <div>
       <button onClick={emit(Decrement)}> - </button>
       { count }
       <button onClick={emit(Increment)}> + </button>
       <button onClick={emit(Reset)}>Reset</button>
       <input type="number" onChange={emit(ExplicitlySet,event)}/>
      </div>
    )
  }
})