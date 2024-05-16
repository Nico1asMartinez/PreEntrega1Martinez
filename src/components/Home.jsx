
import  { useState } from 'react'
import Input from './Input'
import { Button } from 'antd'


function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
    
  }

  const onNameChange = (name) => {
    setName(name)
  }

  const onEmailChange = (email) => {
    setEmail(email)
  }


  return (
    <div>
      <form onSubmit={handleSubmit} >
    <Input onChange={onNameChange} placeholder="Escribe un Nombre..." text="Nombre" id="name" />
    <Input onChange={onEmailChange} placeholder="Escribe un Email..." text="Email" id="email" type="email" />
    <button className='bg-blue-500 text-white rounded mt-3 mx-5 hover:bg-blue-700 w-24 h-10'>Enviar</button>
      </form>
    </div>
  )
}

export default Home