import { useState, useEffect } from "react"


const setInit = (init: any, key:string) => {
    let val = localStorage.getItem(key)
    val = val? JSON.parse(val) : val
    if(val) return val
    if(init instanceof Function) return init()
    return init
}

const useLocalStorage = (init: any , key:string) => {
    const [value, setter] = useState(() => setInit(init, key))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setter]
}

export default useLocalStorage