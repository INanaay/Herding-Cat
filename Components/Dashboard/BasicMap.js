import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import MapView from 'react-native-maps'
import DashboardComponentHeader from './DashboardComponentHeader'
import globalStyle from '../../styles'


const markers = [
    {
        latitude: 48.8151371,
        longitude: 2.3617839,
    },
    {
        latitude: 48.8142918,
        longitude: 2.3602696,
    }
]

export default class BasicMap extends React.Component {


    placeMapMarker(markerIndex){
        return (
            <MapView.Marker
                coordinate={markers[markerIndex]}>
                <Image
                    source={require('/home/NANAA/Missions/Herding/Resources/Icons/pin_vert.png')}
                    style={styles.marker}
                />
            </MapView.Marker>
        )
    }

    render() {

        return (
            <View  style={globalStyle.dashboardBorder}>
                <DashboardComponentHeader name={this.props.name} text={this.props.header} navigation={this.props.navigation} detailedActivity={this.props.detailedActivity}
                />
                <View style={styles.container}>
                    <MapView style={styles.map}
                             initialRegion={{
                                 latitude: 48.814808,
                                 longitude: 2.36302,
                                 longitudeDelta: 0.003,
                                 latitudeDelta: 0.003
                             }}>
                        <MapView.Polyline
                            coordinates={markers}
                            strokeWidth={3}
                            strokeColor={globalStyle.secondaryColor}
                        />
                        <MapView.Marker
                            coordinate={markers[0]}>
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={markers[1]}>
                        </MapView.Marker>
                    </MapView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        height: 180 ,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40,

    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    marker: {
        width: 30,
        height: 30
    }
})