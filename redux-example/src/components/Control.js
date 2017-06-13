/**
 * Created by kiost on 2017-06-13.
 */
import React, {Component} from 'react';

const propTypes = {
    onPlus: React.PropTypes.func,
    onSubtract: React.PropTypes.func,
    onRandomizeColor: React.PropTypes.func
};

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

function createWarning(funcName) {
    return () => console.warn(funcName + 'is not defined!');
}

class Control extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    };
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;