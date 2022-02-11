import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreens from './src/screen/PostsScreens';
import ContextState from './src/context/ContextState';
import PostIdScreen from './src/screen/PostIdScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ContextState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Posts' component={PostsScreens} />
          <Stack.Screen name='PostsId' component={PostIdScreen}  options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextState>
  );
}
