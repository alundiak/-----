import React from 'react';
// import PropTypes from 'prop-types';
import roadImg from 'img/1_road.jpg';

class Road extends React.Component {
    // propTypes = {

    // }

    // defaultProps = {

    // }

    state = {
        // TODO
    }

    render() {
        const { children } = this.props;

        return (
            <div className="road">
                <img src={roadImg} alt="Road" width="300px" />
                {children}
            </div>
        );
    }
}

export default Road;