import React from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { userInfo } from '../../actions/actions'

class ReduxTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', telephone: '' };
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        //const { userInfo } = this.props;
        const { name, telephone } = this.state;
        userInfo(name, telephone);
        console.log(name, telephone);

    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render () {
        return (
            <div>
                <form action="" onSubmit={(e) => this.onFormSubmit(e)}>
                    <input type="text" name="name" onChange={(e) => this.onInputChange(e)}/>
                    <input type="text" name="telephone" onChange={(e) => this.onInputChange(e)}/>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        );
    }
}

export default connect(null, { userInfo })(ReduxTester);


