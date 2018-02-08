import React, { Component } from 'react';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [
                {
                    id: '1',
                    name: 'Mushasino'
                },
                {
                    id: '2',
                    name: 'Padme'
                }
            ]
        }
    }

    selectedChanged(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Pets</h1>
                <select onChange={this.selectedChanged}>
                    {this.state.pets.map(pet => 
                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                    )}
                </select>
            </div>
        );
    }
}

export default Pets;