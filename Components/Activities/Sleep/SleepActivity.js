import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import ActivityHeader from '../ActivityHeader'

export default class SleepActivity extends React.Component {

    render()
    {
        return (
            <View>
                <ActivityHeader title={"sleep"} navigation={this.props.navigation}/>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../../Resources/Images/Activities/sleep.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
    }
});
