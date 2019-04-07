import React from 'react';
import PropTypes from 'prop-types';
import Road from './Road';
import Spot from './Spot';
import Tree from './Tree';
import TreeSlider from './TreeSlider';

class App extends React.Component {
    state = {
        // TODO
    }

    render() {

        return (
            <div>
                <Road>
                    <Spot>
                        <Tree />
                    </Spot>
                </Road>
                <TreeSlider />
            </div>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;