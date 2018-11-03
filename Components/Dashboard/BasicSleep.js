import React from 'react'
import {View} from 'react-native'
import globalStyle from "../../styles";
import DashboardComponentHeader from './DashboardComponentHeader'
import { AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default class BasicSleep extends React.Component {
    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const contentInset = { top: 20, bottom: 20 }


        return (
            <View style={globalStyle.dashboardBorder}>
                <DashboardComponentHeader name={this.props.name} text={'Sleep'} navigation={this.props.navigation}
                                          detailedActivity={'SleepActivity'}/>

                <View style={{alignItems:'center'}}>
                    <View style={globalStyle.graphContainer} >

                <AreaChart
                    style={{ height: 200, flex:1 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: globalStyle.secondaryColor}}
                >
                    <Grid/>
                </AreaChart>
                    </View>
            </View>
            </View>

        )
    }
}