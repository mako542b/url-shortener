import { useState, useEffect } from "react"



function useLocalStorage <T>(key:string, initialValue: any) {
    const [value, setter] = useState(() => {
        let value = localStorage.getItem(key)
        if(value) return JSON.parse(value)
        else if(initialValue instanceof Function) return initialValue()
        else return initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setter]
}

export default useLocalStorage