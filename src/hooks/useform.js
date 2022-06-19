import { useState } from 'react'

const Useform = (initialState ={}) => {

    const [data, setData] = useState(initialState)

    const handleReset = () =>{setData(initialState)}

    const handleChange = ({target}) =>{
        setData({
            ...data,
          [target.name]: target.value
          })
    }
  return[data, handleChange,handleReset]
}

export default Useform