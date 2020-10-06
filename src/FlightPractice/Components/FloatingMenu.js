import React from "react"
import OrderFlight from "./OrderFlight"
import ManageFlight from "./ManageFlight"
import OrderCar from "./OrderCar"

export default function FolatingMenu(){
    return(
        <OrderFlight />
        <ManageFlight />
        <OrderCar />
    )
}