import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import ActivityHeader from '../ActivityHeader'
import globalStyle from "../../../styles";
import GlobalActivity from "./GlobalActivity";
import SocialActivity from "./SocialActivity"
import DayAllocation from "./DayAllocation";
import {createStackNavigator} from 'react-navigation'
import HistoricActivity from './HistoricActivity'
import Stationary from "./Stationary";


class ActivityActivity extends React.Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: globalStyle.backgroundColor}}>
                <ActivityHeader title={"activity"} navigation={this.props.navigation}/>
                <GlobalActivity detailedActivity={'HistoricActivity'}
                                navigation={this.props.navigation}/>
                <SocialActivity detailedActivity={'tempView'}
                                navigation={this.props.navigation}/>
                <DayAllocation detailedActivity={'tempView'}
                               navigation={this.props.navigation}/>
                <Stationary detailedActivity={'tempView'}
                            navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}


export default ActivityDetails = createStackNavigator ({
    ActivityActivity: {
        screen: ActivityActivity,
        navigationOptions: globalStyle.navigationOptions
    },
    HistoricActivity: {
        screen: HistoricActivity,
        navigationOptions: globalStyle.navigationOptions
    }
})
