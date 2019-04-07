import React from 'react';
// import PropTypes from 'prop-types';

class Info extends React.Component {
    // propTypes = {

    // }

    // defaultProps = {

    // }

    render() {
        const { leftPosition, topPosition } = this.props;
        return (
            <div className="info">
                <div>
                    Left: {leftPosition}
                </div>
                <div>
                    Top: {topPosition}
                </div>
            </div>
        );
    }
}

export default Info;