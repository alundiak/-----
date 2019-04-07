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
        defaultVerticalValue: 193,
        onChangeCallback: null
    }

    state = {
        horizontalSliderValue: this.props.defaultHorizontalValue, // eslint-disable-line
        verticalSliderValue: this.props.defaultVerticalValue // eslint-disable-line
    }

    // onChange = (event) => {
    //     const { target } = event;
    //     const { onChangeCallback } = this.props;

    //     // console.log(`${target.name}Value`);

    //     this.setState({
    //         [`${target.name}Value`]: target.value
    //     }, () => {
    //         // TODO it's odd, that I change internal state of component and pass same value to parent.
    //         // Must be smart way to handle Component change and traverse to parent.
    //         // children related?
    //         // ContextProvider related?
    //         onChangeCallback(this.state.horizontalSliderValue, this.state.verticalSliderValue);
    //     });
    // }

    onHorizontalChange = (event) => {
        const { target } = event;
        const { onChangeCallback } = this.props;

        this.setState({
            horizontalSliderValue: +target.value // quick casting from string to number
        }, () => {
            onChangeCallback(this.state.horizontalSliderValue, this.state.verticalSliderValue); //eslint-disable-line
        });
    }

    onVerticalChange = (event) => {
        const { target } = event;
        const { onChangeCallback } = this.props;

        this.setState({
            verticalSliderValue: +target.value // quick casting from string to number
        }, () => {
            onChangeCallback(this.state.horizontalSliderValue, this.state.verticalSliderValue); //eslint-disable-line
        });
    }

    render() {
        const { horizontalValue, verticalValue } = this.state;

        return (
            <div className="tree-slider">
                <input
                    type="range"
                    className="slider"
                    id="horizontalSlider"
                    name="horizontalSlider"
                    min="1"
                    max="110"
                    value={horizontalValue}
                    onChange={this.onHorizontalChange} />

                <input
                    type="range"
                    className="slider"
                    id="verticalSlider"
                    name="verticalSlider"
                    min="125"
                    max="250"
                    value={verticalValue}
                    onChange={this.onVerticalChange} />

            </div>
        );
    }
}

export default TreeSlider;