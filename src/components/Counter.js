import React, { Component } from 'react'

export default class Counter extends Component {
    formmatCount(){
        return this.props.counter.value === 0? 'badge badge-warning' : 'badge badge-primary'
    }
    render() {  
        return (
            <div className="my-2">
                {this.props.children}
                <span className={this.formmatCount()}>{this.props.counter.value===0? 'Zero':this.props.counter.value}</span>
                <button className="btn btn-secondary btn-sm mx-2" onClick={()=>this.props.onIncrease(this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm mx-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>

            </div>
        )
    }
}
