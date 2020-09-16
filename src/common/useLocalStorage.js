import { useState, useCallback } from 'react'

export function useLocalStorage(
    key,
    initialValue
) {

    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        }catch(err){
            return initialValue
        }
    })

    const setValue = useCallback((value) => {
        try{
            if(key){
                setStoredValue(value)
                window.localStorage.setItem(key, JSON.stringify(value))
            }
        }catch(error){
            console.log(error)
        }
    }, [key])

    return [storedValue, setValue]
}