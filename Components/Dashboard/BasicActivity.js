import React from 'react'
import {View, StyleSheet} from 'react-native'
import Header from "./Header";
import globalStyle from '../../styles'
import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts'


export default class BasicActivity extends React.Component {
    render() {

        const fill = globalStyle.secondaryColor
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
        const contentInset = { top: 20, bottom: 20 }


        return (
            <View style={globalStyle.dashboardBorder}>
                <Header name={this.props.name} text={this.props.header}
                        navigation={this.props.navigation}
                        detailedActivity={this.props.detailedActivity}
                />
                <View style={{alignItems:'center'}}>
              <View style={globalStyle.graphContainer} >

                  <YAxis data={data}
                         contentInset={ contentInset }
                         svg={{
                             fill: 'white',
                             fontSize: 10,
                         }}
                         numberOfTicks={ 10 }
                         formatLabel={ value => `${value}` }
                  />

                  <BarChart
                      style={{ flex: 1, marginLeft: 16 }}
                      data={ data }
                      svg={{fill}}
                      contentInset={ contentInset }
                  >
                      <Grid/>
                  </BarChart>

                  <XAxis
                      data={ data }
                      formatLabel={ (value, index) => index }
                      spacingInner={0.02}
                      spacingOuter={0}
                      contentInset={{ left: 10, right: 10 }}
                      svg={{ fontSize: 3, fill: 'black' }}
                  />

              </View>
            </View>
            </View>
        )
    }
}
