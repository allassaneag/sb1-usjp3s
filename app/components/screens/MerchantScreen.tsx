import * as React from "react"
import { ScrollView, StackLayout, TextField, Button, Label } from "@nativescript/core"

export function MerchantScreen() {
  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label text="Détails de la livraison" className="h2 m-b-20" />
        
        <Label text="Description du colis" className="label" />
        <TextField hint="Décrivez votre colis" className="input m-b-10" />
        
        <Label text="Adresse de ramassage" className="label" />
        <TextField hint="Adresse de départ" className="input m-b-10" />
        
        <Label text="Adresse de livraison" className="label" />
        <TextField hint="Adresse de destination" className="input m-b-20" />
        
        <Button text="Rechercher un livreur" className="btn btn-primary" />
      </StackLayout>
    </ScrollView>
  )
}