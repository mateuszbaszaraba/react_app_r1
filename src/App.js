import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Matt", age: 20 },
            { id: 2, name: "Manu", age: 29 },
            { id: 3, name: "Stephanie", age: 25 },
        ],
        otherState: 'some other value',
        showPersons: false,
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = personIndex => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const temp = this.state.showPersons;
        this.setState({showPersons: !temp});
    }

    render() {

        const style = {
            backgroundColor: 'green',
            transition: '0.4s',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            font: 'inherit',
            borderRadius: '5px',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }


        let persons = null;

        if(this.state.showPersons)
        {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
            /*
            style.backgroundColor = 'red';
            style[':hover']= {
                backgroundColor: 'salmon',
                color: 'black'
            }*/
        }

        const classes = [];

        if(this.state.persons.length <= 2) {
           classes.push("red");
        }

        if(this.state.persons.length <= 1) {
            classes.push("bold");
        }

        return (
                <div className="App">
                    <h1>How you doin'?</h1>
                    <p className={classes.join(' ')}>Believe me, this is working</p>
                    <StyledButton
                        alt={this.state.showPersons}
                        onClick={this.togglePersonsHandler}>Toggle this little bastards</StyledButton>
                    {persons}
                </div>
        );
    }
}

export default App;
