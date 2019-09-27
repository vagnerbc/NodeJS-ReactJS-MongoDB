import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';
import Post from './pages/post';

const AppNavigator = createStackNavigator(
  {
    Home: Main,
    PostDetail: Post,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);

export default createAppContainer(AppNavigator);
