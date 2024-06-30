import React from 'react'
import { Badge } from '../ui/badge'

export default function IngredientCard({itemImg, itemName, itemType, itemQty}) {
  return (
    <div className='w-56 h-20 border border-gray-100 rounded-lg flex items-center justify-between p-2'>
      {
        itemImg && <img className='w-[25%] rounded-full' src={itemImg} width={40} alt={`Ingredient`} />
      } 
      <div className='w-70%'>
        <p className='text-xs font-semibold text-primary w-[130px] truncate'>{itemName}</p>
        <div className='w-full flex flex-col justify-between mt-2'>
            <p className="text-[10px] text-primetext font-semibold mb-1">Item: <span className='text-black font-bold'>{itemType}</span></p>
            <p className="text-[10px] text-primetext font-semibold">Quantity: <span className='text-black font-bold'>{itemQty}</span></p>
        </div>
      </div>
    </div>
  )
}
