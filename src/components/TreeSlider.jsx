import React from 'react';
import PropTypes from 'prop-types';

class TreeSlider extends React.Component {
    static propTypes = {
        defaultHorizontalValue: PropTypes.number,
        defaultVerticalValue: PropTypes.number,
        onChangeCallback: PropTypes.func
    }

    static defaultProps = {
        defaultHorizontalValue: 110,
        defaultVerticalValue: -193,
        onChangeCallback: null
    }

    state = {
        horizontalSliderValue: this.props.defaultHorizontalValue, // eslint-disable-line
        verticalSliderValue: this.props.defaultVerticalValue // eslint-disable-line
    }

    onHorizontalChange = (event) => {
        const { target } = event;
        const { onChangeCallback } = this.props;

        this.setState({
            horizontalSliderValue: parseInt(target.value, 10) // quick casting from string to positive number
        }, () => {
            onChangeCallback(this.state.horizontalSliderValue, this.state.verticalSliderValue); //eslint-disable-line
        });
    }

    onVerticalChange = (event) => {
        const { target } = event;
        const { onChangeCallback } = this.props;

        this.setState({
            verticalSliderValue: parseInt(target.value, 10) // quick casting from string to negative number
        }, () => {
            onChangeCallback(this.state.horizontalSliderValue, this.state.verticalSliderValue); //eslint-disable-line
        });
    }

    render() {
        const { horizontalSliderValue, verticalSliderValue } = this.state;

        return (
            <div className="tree-slider">
                <input
                    type="range"
                    className="slider"
                    id="horizontalSlider"
                    name="horizontalSlider"
                    min="1"
                    max="110"
                    // valueAsNumber={horizontalSliderValue}
                    // data-valueAsNumber={horizontalSliderValue}
                    value={horizontalSliderValue}
                    onChange={this.onHorizontalChange} />

                <input
                    type="range"
                    className="slider"
                    id="verticalSlider"
                    name="verticalSlider"
                    min="-250"
                    max="-125"
                    value={verticalSliderValue}
                    onChange={this.onVerticalChange} />

            </div>
        );
    }
}

export default TreeSlider;