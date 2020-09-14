import React, {useEffect} from 'react';
import { View, Button } from 'react-native';
import { styles } from '../styles/styles.js'
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.center}>
            <Button title="Check Vitals!" onPress={() => navigation.navigate('Vitals')}/>
        </View>
    )
}

export default HomeScreen