import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard'

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <Dashboard/>
            </View>

        );
    }
}

