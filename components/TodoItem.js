import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    }

    render() {
        const { id, description } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)}
                /> 
                    {' '}
                    {description}
                    <button 
                        style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}
                        title="Remove Todo"
                    >
                        &times;
                    </button>
                </p>
                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;