import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreens from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: 'black' }
        }}>
          <Stack.Screen
            name='Meals Categories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',

            }}

          />
          <Stack.Screen
            name='Meals Over View'
            component={MealsOverViewScreens}
            options={{
              title: 'Meals Over View',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}