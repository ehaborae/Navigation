import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreens from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetails';

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
            name='MealsOverview'
            component={MealsOverViewScreens}
          // options={({ route, navigation }) => {
          //   const title = route.params.categoryTitle;
          //   return {
          //     title: title,
          //   };
          // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     // return <Text style={style.headerText}> Header</Text>
            //     return <Button title='Press Me' onPress={onHeaderPressed} />
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  headerText: {
    color: '#ccc',
    fontSize: 18,
  },
});