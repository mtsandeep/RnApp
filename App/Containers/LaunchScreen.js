import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

import { observer } from 'mobx-react/native'

// Styles
import styles from './Styles/LaunchScreenStyles'

@observer
export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.appclon} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Base Boilerplate integrating Ignite with MobX and React Navigation.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
