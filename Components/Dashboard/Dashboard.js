import React from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
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
import MeetingsActivity from '../Activities/Meetings/MeetingsActivity'
import MapActivity from "../Activities/Map/MapActivity"
import BleManager from 'react-native-ble-manager';
import SleepActivity from "../Activities/Sleep/SleepActivity";
import ActivityActivity from "../Activities/Activity/ActivityActivity";
import RoundMenu from './RoundMenu/RoundMenu'
import Tips from "./RoundMenu/Tips";
import { stringToBytes } from 'convert-string';
import Buffer from 'buffer'
import Social from "./RoundMenu/Social";
import Challenges from "./RoundMenu/Challenges";

const catName='Hector'
//const id="88:3F:4A:DF:B4:81"
const id="30:AE:A4:14:85:96"

class DashboardView extends React.Component {

    readBluetoothData()
    {
        BleManager.read(id, '4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8')
            .then((readData) => {
                // Success code
                console.log('Read: ' + readData);
                const buffer = Buffer.Buffer.from(readData);    //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
            })
            .catch((error) => {
                // Failure code
                console.log(error);
            });
    }

    constructor(props) {
        super(props)

        BleManager.start({showAlert: false})
            .then(() => {
                // Success code
                console.log('Module initialized');
                BleManager.connect(id)
                    .then(() => {
                        BleManager.retrieveServices(id)
                            .then((peripheralInfo) => {
                                // Success code
                                console.log('Peripheral info:', peripheralInfo);
                                const data = stringToBytes("Yo");
                                BleManager.write(id, '4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8', data)
                                    .then(() => {
                                        // Success code
                                        console.log('Write: ' + data);
                                        this.readBluetoothData()
                                    })
                                    .catch((error) => {
                                        // Failure code
                                        console.log(error);
                                    })

                            }).catch((error) => {
                            // Failure code
                            console.log(error);
                        });
                    })
                    .catch((error) => {
                        // Failure code
                        console.log(error);
                    })

            }).catch((error) => {
            // Failure code
            console.log(error);
        });
    }



    render() {
            return (
                <View>

                    <ScrollView style={{backgroundColor: globalStyle.backgroundColor}}>
                    <ProfilePicture/>
                    <BasicInfo navigation={this.props.navigation}/>

                    <BasicMap name={catName} header={`Day`}
                              detailedActivity={'MapActivity'} navigation={this.props.navigation}
                    />

                    <BasicActivity name={catName} header={`Activity`}
                                   detailedActivity={'ActivityActivity'} navigation={this.props.navigation}/>

                    <BasicMeetings name={catName} header={`Meetings`}
                                   detailedActivity={'MeetingsActivity'} navigation={this.props.navigation}/>

                    <BasicSleep name={catName} header={`Sleep`}
                                detailedActivity={'SleepActivity'} navigation={this.props.navigation}/>

                    <BasicSpeed name={catName} header={`Speed`}
                                detailedActivity={'tempView'} navigation={this.props.navigation}/>

                    <BasicWeight name={catName} header={`Weight`} weight={"54"}
                                 detailedActivity={'tempView'} navigation={this.props.navigation}/>

                </ScrollView>
                    <RoundMenu navigation={this.props.navigation}/>
                </View>
            )
    }
}

export default Dashboard = createStackNavigator ({
    Dashboard: {
        screen: DashboardView,
        navigationOptions: globalStyle.navigationOptions
    },
    ActivityActivity: {
        screen: ActivityActivity,
        navigationOptions: globalStyle.navigationOptions
    },
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
    Tips: {
        screen: Tips,
        navigationOptions: globalStyle.navigationOptions
    },
    Social: {
        screen: Social,
        navigationOptions: globalStyle.navigationOptions
    },
    Challenges: {
        screen: Challenges,
        navigationOptions: globalStyle.navigationOptions
    }
})
