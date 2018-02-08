import React, { Component } from 'react';
import { connect } from "react-redux";
import { Menu } from '../../components/menu';
import { Pets } from '../../components/pets';
import store from './../../Store';
import { addPet } from '../../Actions';
import './Home.scss';

const mapStateToProps = state => {
    return {
        addPet: pet => store.dispatch(addPet(pet))
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        store.subscribe(() => {
            console.log('subscribe', store.getState());
        });
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
                <Pets/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);