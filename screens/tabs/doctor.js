import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js'


export default function Doctor() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Primary Car Provider</Text>
            <Text>Dr. Docington</Text>
            <Text>123 Street</Text>
            <Text>(555) doc-time</Text>
        </View>
    )
}