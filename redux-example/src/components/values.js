/**
 * Created by kiost on 2017-06-13.
 */
import React, {Component} from 'react';

const propTypes = {
    number: React.PropTypes.number
};
const defaultProps = {
    number: -1
};

class Value extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    };
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;