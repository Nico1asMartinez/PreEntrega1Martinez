import React from 'react'



function Input({id = "input", placeholder = "Escribe", type = "text", text = "test", onChange}) {
    
    const handleChange = (e) => {
      onChange(e.target.value)
      
    }


  return (
<div className='form-group  flex flex-col  gap-3 my-2'>
    <label className="form-label text-xl mx-5 " htmlFor={id}>{text}</label>
    <input className='form-control border p-2 shadow-md text-center rounded-md  gap-2' type={type} id={id} placeholder={placeholder} onChange={handleChange} />
</div>
  )
}

export default Input