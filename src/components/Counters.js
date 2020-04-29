import React, { Component } from 'react'
import Counter from './Counter'

const initState = {
    counters : [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]    
}
export default class Counters extends Component {
    constructor(){
        super();
        this.state = {
            counters : [
                {id:1,value:4},
                {id:2,value:0},
                {id:3,value:0},
                {id:4,value:0}
            ]
        }
    }

    

    resetHandler = () => {
        const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
        });
        this.setState({
            counters
        })
    }

    onIncreas = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value++
        this.setState({counters})
        
        
    }

    deleteHandler = counterId => {
        var counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters: counters
        })
    }
    render() {
    let counters = this.state.counters.map(counter=>
          <Counter key={counter.id} 
                   onDelete={this.deleteHandler}
                   onIncrease={this.onIncreas} 
                   counter={counter}/>)
        return (
            <div className="container">
                <button className="btn btn-primary btn-sm mt-3" onClick={()=>this.resetHandler()}>Reset</button>
                {counters}
            </div>
        )
    }
}
