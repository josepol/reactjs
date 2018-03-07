import React, { Component } from 'react';
import { connect } from "react-redux";
import { Menu } from '../../components/menu';
import { Pets } from '../../components/pets';
import Store from './../../Store';
import { addPet } from './Home.actions';
import './Home.scss';

const mapStateToProps = () => {
    return {
        addPet: pet => Store.dispatch(addPet(pet))
    }
}

class Home extends Component {

    addPet() {
        const id = parseInt(Math.random() * 1000 + 1, 10);
        this.props.addPet({
            id,
            name: 'Name ' + id
        })
    }

    render() {
        return (
            <div>
                <Menu />
                <h1>Home</h1>
                <button onClick={() => this.addPet()}>Add </button>
                <Pets/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home)