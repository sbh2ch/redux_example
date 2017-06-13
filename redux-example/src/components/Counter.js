/**
 * Created by kiost on 2017-06-13.
 */
import React, {Component} from 'react';
import Value from './values';
import Control from './Control';

const propTypes = {};
const defaultProps = {};

class Counter extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <Value/>
                <Control/>
            </div>
        );
    };
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;