class AddTodo extends React.Component {
    state = {
        description: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]:  e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.description === '' || this.state.description.trim() === '') {
            document.getElementById('description').focus();
        } else {
            this.props.addTodo(this.state.description);
            this.setState({ description: '' });
        }

    }

    render () {
        return (
            <form style={ { display: 'flex' } } onSubmit={this.onSubmit}>
                <input 
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Add Todo..."
                    value={this.state.description}
                    onChange={this.onChange}
                    style={{ flex: '10', padding: '5px' }}
                    autoFocus
                />
                <input 
                    type="submit" 
                    value="Add"
                    style={ {flex: '1'} }
                    className="btn"
                />
                <br/>
                <style jsx>{`
                    .btn {
                        display: inline-block;
                        border: none;
                        background: #555;
                        color: #fff;
                        padding: 7px 20px;
                        cursor: pointer;
                        title: 'Remove todo;
                    }

                    .btn:hover {
                        background: #666;
                    }
                `}</style>
            </form>
        );
    }
}

export default AddTodo;