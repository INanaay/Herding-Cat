import React from 'react'
import {View, Dimensions} from 'react-native'
import DashboardComponentHeader from './DashboardComponentHeader'
import globalStyle from "../../styles";
import {ProgressChart} from 'react-native-chart-kit'
import bael from 'babel-polyfill/'

const data = [0.4, 0.6, 0.8]


export default class BasicSpeed extends React.Component {
    render() {

        return (
            <View style={globalStyle.dashboardBorder}>
                <DashboardComponentHeader name={this.props.name} text={'Speed'} navigation={this.props.navigation} detailedActivity={'SpeedActivity'}/>
                <View style={{marginBottom: 20}}>
                <ProgressChart
                    data={data}
                    width={globalStyle.screenWidth}
                    height={150}
                    chartConfig={globalStyle.chartConfig}
                />
                </View>
            </View>


        )
    }
}