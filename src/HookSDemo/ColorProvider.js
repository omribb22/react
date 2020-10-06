import React, {createContext, useState} from "react"
import ColorsData from "./colors-data.json"
import { v4 } from "uuid"


const ColorContext = createContext()

export function ColorProvider ({childrens}){

    [colors, setColors] = useState(ColorsData)

    const addColor = (title, color) => { 
     setColors([{...colors},
    {
    id:v4(),
    rating:0,
    title,
    color
    }])   
    }

    const rateColor = (id,rate) => {
        setColors(colors.map(color => ((color.id === id) ? {...color, rate} : color)))
    }

    const removeColor = setColors((id) => (colors.filter(color => color.id !== id)))

    return(
        <ColorContext.Provider value={{colors, addColor, removeColor, rateColor}}>
            {childrens}
        </ColorContext.Provider>
    )
}