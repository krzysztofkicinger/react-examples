import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHelloMessage} from '../actions/hello.actions';
import HelloComponent from '../components/hello.component';

class HelloPage extends Component {

    componentWillMount() {
        this.props.fetchHelloMessage();
    }

    render = () =>
        <HelloComponent message={this.props.hello.message}/>
}

const mapStateToProps = ({hello}) => ({hello});

export default connect(mapStateToProps, {fetchHelloMessage})(HelloPage);
