import React, {useState} from "react"

export const input = (initValue) => {
    
    const [value, setValue] = useState(initValue)
    return(
        [
            {
                value, 
                onChange: e => setValue(e.target.value)
            },
            () =>setValue(initValue)
        ]
        )
}