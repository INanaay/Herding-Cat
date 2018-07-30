import React from 'react'
import {View, ScrollView, ActivityIndicator} from 'react-native'
import ProfilePicture from './ProfilePicture'
import globalStyle from '../../styles'
import BasicInfo from "./BasicInfo";
import BasicMap from "./BasicMap";
import {createStackNavigator} from 'react-navigation'
import tempView from "../tempView";
import BasicActivity from "./BasicActivity";
import BasicMeetings from './BasicMeetings'
import BasicWeight from "./BasicWeight";
import BasicSpeed from "./BasicSpeed";
import BasicSleep from "./BasicSleep";
import HistoricActivity from "../Activities/Activity/HistoricActivity";
import MeetingsActivity from '../Activities/Meetings/MeetingsActivity'
import MapActivity from "../Activities/Map/MapActivity"
import { BleManager } from 'react-native-ble-plx';
import SleepActivity from "../Activities/Sleep/SleepActivity";
import ActivityActivity from "../Activities/Activity/ActivityActivity";


const catName='Hector'

class DashboardView extends React.Component {

    constructor(props) {
        super(props)
        this.manager = new BleManager();

        console.log("Lol")

        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error)
                // Handle error (scanning will be stopped automatically)
                return
            }

            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            console.log("Yo")

            if (device.name === 'TI BLE Sensor Tag' ||
                device.name === 'SensorTag') {

                // Stop scanning as it's not necessary if you are scanning for one device.
                this.manager.stopDeviceScan();

                // Proceed with connection.
            }
        });
    }


    render() {
            return (
                <ScrollView style={{backgroundColor: globalStyle.backgroundColor}}>
                    <ProfilePicture/>
                    <BasicInfo/>

                    <BasicMap name={catName} header={`Day`}
                              detailedActivity={'MapActivity'} navigation={this.props.navigation}
                    />

                    <BasicActivity name={catName} header={`Activity`}
                                   detailedActivity={'HistoricActivity'} navigation={this.props.navigation}/>

                    <BasicMeetings name={catName} header={`Meetings`}
                                   detailedActivity={'MeetingsActivity'} navigation={this.props.navigation}/>

                    <BasicSleep name={catName} header={`Sleep`}
                                detailedActivity={'SleepActivity'} navigation={this.props.navigation}/>

                    <BasicSpeed name={catName} header={`Speed`}
                                detailedActivity={'tempView'} navigation={this.props.navigation}/>

                    <BasicWeight name={catName} header={`Weight`} weight={"54"}
                                 detailedActivity={'tempView'} navigation={this.props.navigation}/>

                </ScrollView>
            )
    }
}

export default Dashboard = createStackNavigator ({
    ActivityActivity: {
        screen: ActivityActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    Dashboard: {
        screen: DashboardView,
        navigationOptions: globalStyle.navigationOptions

    },
    HistoricActivity: {
        screen: ActivityActivity,
        navigationOptions: globalStyle.navigationOptions
    }, // change with dashboard
    MapActivity: {
        screen: MapActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    MeetingsActivity: {
        screen: MeetingsActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    SleepActivity: {
        screen: SleepActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    tempView: {
        screen: tempView
    },

})