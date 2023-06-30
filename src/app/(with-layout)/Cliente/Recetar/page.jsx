'use client';
import { useState } from 'react'
import Button from '@/components/Button';
import { useUser } from '@/context/Context.js'
import Subtitle from '@/components/Subtitle'
import { WithAuth } from '@/HOCs/WithAuth'
import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'
import Page from '@/components/Page'
import Label from '@/components/Label'
import MiniCard from '@/components/MiniCard'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';

function Comprar({ theme, styled, click, children }) {

  const { user, userDB, cart, productDB, setUserProduct, setUserItem, setUserData, setUserSuccess } = useUser()
  const [add, setAdd] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [state, setState] = useState({})
  const [check, setCheck] = useState(false)

  const router = useRouter()

  function onChangeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  function handlerPay(e) {
    e.preventDefault()
    Object.values(cart).map((i) => {
      const data = { ...i }
      delete data['created_at']
      delete data['id']
      writeUserData('receta', { ...data, ...state, medico: user.uid}, i.uuid, userDB, setUserData, setUserSuccess, 'existos', null)
    })
  }

console.log(state)
  return (<div className='w-screen p-5'>

    <form >
      <h3 className='text-center text-[16px] pb-3'>PACIENTE</h3>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label htmlFor="">Paciente</Label>
          <Input type="text" name="paciente" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">Diagnostico</Label>
          <Input type="text" name="diagnostico" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">Hospital o centro medico</Label>
          <Input type="text" name="hospital" onChange={onChangeHandler} />
        </div>
        <Button theme="Success" click={handlerPay}> Guardar</Button>

      </div>
    </form>
  </div>)
}

export default WithAuth(Comprar)


