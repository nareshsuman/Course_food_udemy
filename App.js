import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import DetialScreen from './src/screens/DetailScreen'
const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: DetialScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Course Search "
  }
})

export default createAppContainer(navigator)