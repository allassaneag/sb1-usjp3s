import * as React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './screens/HomeScreen'
import { MerchantScreen } from './screens/MerchantScreen'
import { DeliveryScreen } from './screens/DeliveryScreen'

const Stack = createStackNavigator()

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Express Livraison' }}
        />
        <Stack.Screen 
          name="Merchant" 
          component={MerchantScreen} 
          options={{ title: 'Espace Marchand' }}
        />
        <Stack.Screen 
          name="Delivery" 
          component={DeliveryScreen} 
          options={{ title: 'Espace Livreur' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}