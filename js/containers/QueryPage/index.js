import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Input } from 'nachos-ui';
import styles from './style.js';


class QueryPage extends React.Component{

    constructor(props){
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Input 
                    style={styles.queryBox} 
                    onChangeText={(text) => this.setState({text})}
                    height={100}
                    value={this.state.text} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <Button 
                    onPress={() => {}}
                    style={styles.convertButton} 
                    title='Convert'
                />
            </View>           
        );
    }
}

export default QueryPage;