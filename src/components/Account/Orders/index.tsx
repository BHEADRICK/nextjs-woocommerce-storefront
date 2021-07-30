import React from 'react'
import useSWR from 'swr'
import { Order } from '../../../types'

const AccountOrders: React.FC = () => {
  const { data } = useSWR('/api/orders/retrieve')
console.log(data);
if(data && data.length){

  return (
    <div>
      <ul>
        {data?(data.map((item: Order) => {
          return (
            <li key={item.id}>
              <span>
                {item.id} {item.date_created} {item.status} {item.total}
              </span>
            </li>
          )
        })):[]}
      </ul>
    </div>
  )
}else{
return(
  <div>
    No Orders Found
  </div>
)
}
}

export default AccountOrders
