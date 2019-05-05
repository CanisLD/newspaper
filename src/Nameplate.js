import React from 'react';
import ReactDOM from 'react-dom';
import './Nameplate.css';

class Nameplate extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}



export default Nameplate;
