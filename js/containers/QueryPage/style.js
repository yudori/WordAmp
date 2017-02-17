import { StyleSheet } from 'react-native';
import formStyles from '../../styles/forms';
import { COLOR_WHITE, SECONDARY_COLOR } from '../../styles/values';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: '#ffe926',
        alignItems: 'center',
        justifyContent: 'center'
    },
    queryBox:{
        marginBottom: 10,
        borderRadius: 5,
    },
    convertButton:{
        margin: 5
    }
});

export default styles;