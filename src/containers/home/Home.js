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
    constructor(props) {
        super(props);
        Store.subscribe(() => {
            console.log('subscribe', Store.getState());
        });
    }

    addPet() {
        this.props.addPet({
            id: '3',
            name: 'Nalita nala'
        });
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

export default connect(mapStateToProps)(Home);