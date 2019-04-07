import React from 'react';
// import PropTypes from 'prop-types';
import Road from './Road';
import Spot from './Spot';
import Tree from './Tree';
import TreeSlider from './TreeSlider';
import Info from './Info';

import 'css/app.less';
import 'css/responsive.less';

const constants = {
    defaultHorizontalValue: 110,
    defaultVerticalValue: -193,
    hRange: [20, 25], // middle 25
    vRange: [-175, -170], // middle -173
};

class App extends React.Component {
    // static propTypes = {

    // };

    // static defaultProps = {

    // };

    state = {
        // leftPosition: constants.defaultHorizontalValue,
        // topPosition: constants.defaultVerticalValue,
        leftPosition: null,
        topPosition: null,
        result: ''
    }

    treeSliderChangeHandler = (horizontalSliderValue, verticalSliderValue) => {
        const hCriteria = horizontalSliderValue > constants.hRange[0] && horizontalSliderValue < constants.hRange[1];
        const vCriteria = verticalSliderValue > constants.vRange[0] && verticalSliderValue < constants.vRange[1];
        const result = (hCriteria && vCriteria) || '';

        this.setState({
            leftPosition: horizontalSliderValue,
            topPosition: verticalSliderValue,
            result
        });
    }

    render() {
        const { leftPosition, topPosition, result } = this.state;

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
                    done={result}
                />
            </div>
        );
    }
}

export default App;