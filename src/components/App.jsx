import React from 'react';
// import PropTypes from 'prop-types';
import Road from './Road';
import Spot from './Spot';
import Tree from './Tree';
import TreeSlider from './TreeSlider';
import Info from './Info';

import 'css/app.less';

const constants = {
    defaultHorizontalValue: 110,
    defaultVerticalValue: 193,
};

class App extends React.Component {
    // static propTypes = {

    // };

    // static defaultProps = {

    // };

    state = {

    }

    treeSliderChangeHandler = (horizontalSliderValue, verticalSliderValue) => {
        this.setState({
            leftPosition: horizontalSliderValue,
            topPosition: verticalSliderValue
        });
    }

    render() {
        const { leftPosition, topPosition } = this.state;

        return (
            <div>
                <Road>
                    <Spot>
                        <Tree
                            leftPosition={leftPosition}
                            topPosition={topPosition}
                        />
                    </Spot>
                </Road>
                <TreeSlider
                    defaultHorizontalValue={constants.defaultHorizontalValue}
                    defaultVerticalValue={constants.defaultVerticalValue}
                    onChangeCallback={this.treeSliderChangeHandler}
                />
                <Info
                    leftPosition={leftPosition}
                    topPosition={topPosition}
                />
            </div>
        );
    }
}

export default App;