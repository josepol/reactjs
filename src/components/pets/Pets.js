import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        pets: state.HomeReducer.pets
    }
}

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    selectedChanged(event) {
        console.log(event.target.value);
    }

    seePetsProps() {
        console.log(this.props.pets);
    }

    render() {
        return (
            <div>
                <h1>Pets</h1>
                <button onClick={() => this.seePetsProps()}>see pets in console</button>
                <select onChange={() => this.selectedChanged()}>
                    {this.props.pets.map(pet => 
                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                    )}
                </select>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Pets);