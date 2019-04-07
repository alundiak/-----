import React from 'react';
import PropTypes from 'prop-types';
import roadImg from 'img/2_tree.png';

class Tree extends React.Component {
    static propTypes = {
        leftPosition: PropTypes.number,
        topPosition: PropTypes.number
    }

    static defaultProps = {
        leftPosition: null,
        topPosition: null
    }

    // state = {
    //     leftPosition: null,
    //     topPosition: null
    // }

    render() {
        const { leftPosition, topPosition } = this.props;
        const styles = {};

        if (leftPosition) {
            styles.left = `${leftPosition}px`;
        }

        if (topPosition) {
            styles.top = `-${topPosition}px`;
        }

        console.log(styles);

        return (
            <div className="tree">
                <img src={roadImg} alt="Tree" width="108px" style={styles} />
            </div>
        );
    }
}

export default Tree;