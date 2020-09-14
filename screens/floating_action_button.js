import React from 'react';
import { styles } from '../styles/styles.js';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function FloatingActionButton(){
    const navigation = useNavigation();

    return (
        <FAB
            style={styles.fab}
            large
            icon="plus"
            onPress={() => navigation.navigate('MeasureNow')}
        />
    )
}

    


export default FloatingActionButton;