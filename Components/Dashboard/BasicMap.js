import React from 'react'
import {StyleSheet, View} from 'react-native'
import MapView from 'react-native-maps'
import Header from './Header'
import globalStyle from '../../styles'

const markers = [
    {
        latitude: 48.814808,
        longitude: 2.36302,
    },
    {
        latitude: 48.36343,
        longitude: 2.36450
    }
]


export default class BasicMap extends React.Component {

    render() {

        return (
            <View  style={globalStyle.dashboardBorder}>
                <Header name={this.props.name} text={this.props.header} navigation={this.props.navigation} detailedActivity={this.props.detailedActivity}
                />
                <View style={styles.container}>
                    <MapView style={styles.map}
                             region={{
                                 latitude: 48.814808,
                                 longitude: 2.36302,
                                 longitudeDelta: 0.01,
                                 latitudeDelta: 0.01
                             }}>
                        <MapView.Marker coordinate={markers[0]}/>
                    </MapView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        height: 180 ,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40


    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})