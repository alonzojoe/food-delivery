import { useEffect, useState } from "react"


const getLocalStorage = <T,>(key: string, initialValue: T): T => {

    const storedValue = localStorage.getItem(key)

    if (storedValue) return JSON.parse(storedValue)

    return typeof initialValue === 'function' ? (() => initialValue as T)() : initialValue

}

const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState(() => getLocalStorage(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
