import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreens from './src/screen/PostsScreens';
import ContextState from './src/context/ContextState';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ContextState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Posts' component={PostsScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextState>
  );
}
