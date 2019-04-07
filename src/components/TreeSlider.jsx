import React from 'react';
import PropTypes from 'prop-types';

class TreeSlider extends React.Component {
    static propTypes = {
        defaultSliderValue: PropTypes.number,
        onChangeCallback: PropTypes.func
    }

    static defaultProps = {
        defaultSliderValue: 50,
        onChangeCallback: null
    }

    state = {
        sliderValue: this.props.defaultSliderValue // eslint-disable-line
    }

    onChange = (event) => {
        const { target } = event;
        const { onChangeCallback } = this.props;

        this.setState({
            sliderValue: target.value
        }, () => {
            // TODO it's odd, that I change interanl state of component and pass same value to parent.
            // Must be smart way to handle Component change and traverse to parent.
            // children related?
            // ContextProvider related?
            onChangeCallback(target.value);
        });
    }

    render() {
        const { sliderValue } = this.state;

        console.log('Default Slider Value', sliderValue);

        return (
            <div className="tree-slider">
                <input
                    type="range"
                    className="slider"
                    id="myRange"
                    min="1"
                    max="100"
                    value={sliderValue}
                    onChange={this.onChange} />
            </div>
        );
    }
}

export default TreeSlider;