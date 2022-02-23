import React, {useState, useReducer} from 'react'
const errorInicial = [ ]
function adder(errors, action) {
    return errors.join(action.message)
}
export function useField({ initialValue }) {

    const [value, setValue] = useState(initialValue)
    const [errors, addError] = useReducer(adder, errorInicial)

    return { value, setValue, errors, addError}
}