import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'nachos-ui';

import { actionSendQuery } from '../../actions/query';
import styles from './style';


class QueryPage extends React.Component {

    static propTypes = {
        actionSendQuery: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    sendQuery = () => {
        this.props.sendQuery(this.state.text);
    }

    render() {
        return (
          <View style={styles.container}>
            <Input
              onChangeText={text => this.setState({ text })}
              height={100}
              value={this.state.text}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
            <Button
              onPress={() => { this.sendQuery(); }}
              style={styles.convertButton}
              title="Convert"
            />
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actionSendQuery: () => {
        dispatch(actionSendQuery);
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(QueryPage);
