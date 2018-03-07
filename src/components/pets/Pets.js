import React, { Component } from 'react';
import Store from './../../Store';
import { deletePet } from '../../containers/home/Home.actions';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        pets: state.HomeReducer.pets,
        deletePet: pet => Store.dispatch(deletePet(pet))
    }
}

class Pets extends Component {
    constructor() {
        super();
        this.state = {
            currentPet: {}
        }
    }

    selectedChanged(event) {
        this.setState({
            currentPet: event.target.value
        });
    }

    deleteSelectedPet() {
        this.props.deletePet(this.state.currentPet);
    }

    render() {
        return (
            <div>
                <h1>Pets</h1>
                <button onClick={() => this.deleteSelectedPet()}>Delete selected pet</button>
                <select onChange={(e) => this.selectedChanged(e)}>
                    {this.props.pets.map(pet => 
                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                    )}
                </select>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Pets)