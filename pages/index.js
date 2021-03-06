import Head from 'next/head';
import Layout from '../components/Layout';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    description: 'This is a default todo.',
                    completed: false
                }
            ]
        }
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                
                return todo;
            })
        });
    }

    // Delete Todo
    delTodo = (id) => {
        const answer = confirm ('Are you sure you want to remove this todo?');
        if (answer === true)  {
            this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
        }
    }

    // AddTodo
    addTodo = (description) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            description,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render () {
        return (
            <Layout>
                <Head>
                    <title>My Todo Application</title>
                </Head>
                <section>
                    <AddTodo addTodo={this.addTodo} />
                    {/*<TodoItem />*/}
                    <Todos 
                        todos={this.state.todos} 
                        markComplete={this.markComplete} 
                        delTodo={this.delTodo} 
                    />
                </section>
            </Layout>
        );
    }
}

export default Index;