import * as React from "react"
import { StackNavigationProp } from "@react-navigation/stack"
import { FlexboxLayout, Button } from "@nativescript/core"

interface Props {
  navigation: StackNavigationProp<any>
}

export function HomeScreen({ navigation }: Props) {
  return (
    <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      <Button 
        text="Je suis un Marchand" 
        onTap={() => navigation.navigate('Merchant')}
        className="btn btn-primary m-b-20"
      />
      <Button 
        text="Je suis un Livreur" 
        onTap={() => navigation.navigate('Delivery')}
        className="btn btn-secondary"
      />
    </FlexboxLayout>
  )
}