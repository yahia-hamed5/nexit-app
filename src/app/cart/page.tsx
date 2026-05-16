import React from 'react'
import { supabase } from '../../../lib/supabase'

export default async function Cart() {
  const  data = await supabase.from('items').select('*')
  console.log(data)
  return (
    <div>Cart</div>
  )
}
