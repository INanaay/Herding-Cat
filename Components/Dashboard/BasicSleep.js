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
                <DashboardComponentHeader name={this.props.name} text={this.props.header} navigation={this.props.navigation}
                                          detailedActivity={this.props.detailedActivity}/>

                <View style={{ height: 240, padding: 20, flex: 1, flexDirection: 'column' }} >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <YAxis
                        data={ data }s
                        contentInset={ contentInset }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={ 10 }
                        formatLabel={ value => `${value}ºC` }
                    />
                <AreaChart
                    style={{ height: 200, flex:1 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid/>
                </AreaChart>
                    </View>
                    <XAxis
                        style={{ marginHorizontal: -10, marginLeft: 20 }}
                        data={ data }
                        formatLabel={ (value, index) => index }
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
            </View>
            </View>

        )
    }
}