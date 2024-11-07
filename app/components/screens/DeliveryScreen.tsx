import * as React from "react"
import { ScrollView, StackLayout, Label, ListView } from "@nativescript/core"
import { requestPermissions } from "@nativescript/geolocation"

export function DeliveryScreen() {
  React.useEffect(() => {
    requestPermissions().then(() => {
      // Initialiser la géolocalisation
    })
  }, [])

  const deliveries = [
    { 
      id: 1, 
      pickup: "123 Rue du Commerce",
      dropoff: "456 Avenue du Marché",
      description: "Petit colis 2kg"
    },
    // Plus de livraisons disponibles...
  ]

  return (
    <ScrollView>
      <StackLayout padding={16}>
        <Label text="Livraisons disponibles" className="h2 m-b-20" />
        
        <ListView
          items={deliveries}
          itemTemplate={(item) => (
            <StackLayout className="delivery-item p-10 m-b-10">
              <Label text={`Ramassage: ${item.pickup}`} className="body" />
              <Label text={`Livraison: ${item.dropoff}`} className="body" />
              <Label text={`Description: ${item.description}`} className="body" />
              <Button text="Accepter la course" className="btn btn-primary m-t-10" />
            </StackLayout>
          )}
        />
      </StackLayout>
    </ScrollView>
  )
}