import React from 'react';
// import PropTypes from 'prop-types';

const constants = {
    heading1: 'Посади Дерево Правильно',
    wellDone: 'Посадив Правильно :)'
};

class Info extends React.Component {
    // propTypes = {

    // }

    // defaultProps = {

    // }

    render() {
        const { leftPosition, topPosition, done } = this.props;
        return (
            <div className="info">
                <h1>
                    {constants.heading1}
                </h1>
                <div>
                    Left: {leftPosition}
                </div>
                <div>
                    Top: {topPosition}
                </div>
                <div className="done">
                    {
                        done && <h1>{constants.wellDone}</h1>
                    }
                </div>
            </div>
        );
    }
}

export default Info;