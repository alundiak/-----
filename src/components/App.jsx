import React from 'react';
// import PropTypes from 'prop-types';
import Road from './Road';
import Spot from './Spot';
import Tree from './Tree';
import TreeSlider from './TreeSlider';

import 'css/app.less';

const constants = {
    defaultSliderValue: 50
};

class App extends React.Component {
    // static propTypes = {

    // };

    // static defaultProps = {

    // };

    state = {
        treePositionFromSlider: constants.defaultSliderValue
    }

    treeSliderChangeHandler = (sliderValue) => {
        console.log('treeSliderChangeHandler', sliderValue);
        this.setState({
            treePositionFromSlider: sliderValue
        });
    }

    render() {
        const { treePositionFromSlider } = this.state;

        return (
            <div>
                <Road>
                    <Spot treePosition={treePositionFromSlider}>
                        <Tree />
                    </Spot>
                </Road>
                <TreeSlider
                    defaultSliderValue={constants.defaultSliderValue}
                    onChangeCallback={this.treeSliderChangeHandler}
                />
            </div>
        );
    }
}

export default App;