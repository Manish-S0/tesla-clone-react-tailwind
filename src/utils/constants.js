import { assets } from "../assets/assets"
export const vehicles = [
  {
    id: 1,
    name: "Model S",
    image: assets.ModelS,
    leftBtn:"Learn",
    rightBtn:"Order",
  },
  {
    id: 2,
    name: "Model 3",
    image: assets.Model3,
    leftBtn:"Learn",
    rightBtn:"Order",
  },
  {
    id: 3,
    name: "Model X",
    image: assets.ModelX,
    leftBtn:"Learn",
    rightBtn:"Order",
  },
  {
    id: 4,
    name: "Model Y",
    image: assets.ModelY,
    leftBtn:"Learn",
    rightBtn:"Order",
  },
  {
    id: 5,
    name: "Cybertruck",
    image: assets.Cybertruck,
    leftBtn:"Learn",
    rightBtn:"Order",
  },
]
export const accessories = {
  vehicles:["Inventory","Used Cars","Demo Drive","Trade-in","Compare","Help Me Charge","Fleet","Semi","Roadster"],
  
  Energy:["Schedule a Consultation",
"Why Solar",
"Incentives",
"Support",
"Partner with Tesla",
"Commercial",
"Utilities"],

  Charging:["Help Me Charge",
    "Charging Calculator",
    "Charging With NACS",
    "Supercharger Voting",
    "Host a Supercharger",
    "Commercial Charging",
    "Host Wall Connectors"
  ]

}

// export const Energy = [
//   {
//     id: 1,
//     title: "Battery",