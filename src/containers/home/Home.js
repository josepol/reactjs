import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Menu } from '../../components/menu';
import { Pets } from '../../components/pets';
import Store from './../../store';
import { addPet } from './Home.actions';
import './Home.scss';

const mapStateToProps = () => {
    return {
        addPet: pet => Store.dispatch(addPet(pet))
    }
}

class Home extends Component {
    static get propTypes() {
        return {
            addPet: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        Store.subscribe(() => {
            console.log('subscribe', Store.getState());
        });
        props.addPet({
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