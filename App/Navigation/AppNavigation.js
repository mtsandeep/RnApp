import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: () => ({
      headerVisible: false
    })
  }
}, {
  // Default config for all screens
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    title: navigation.state && navigation.state.params && navigation.state.params.title,
    headerTintColor: Colors.fire,
    headerStyle: styles.header

  })

})

export default PrimaryNav
