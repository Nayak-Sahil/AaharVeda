import React from 'react'
import { Badge } from '../ui/badge'

export default function IngredientCard({itemImg, itemName, itemType, itemQty}) {
  return (
    <div className='w-60 h-20 border border-gray-100 rounded-lg flex items-center justify-between p-2 pr-4'>
      {
        itemImg && <img className='w-[25%] rounded-full mr-5' src={itemImg} width={40} alt={`Ingredient`} />
      } 
      <div className='w-70%'>
        <p className='text-xs font-semibold text-primary w-[70%] truncate'>{itemName}</p>
        <div className='w-full flex flex-col justify-between mt-3'>
            <p className="text-xs text-primetext font-semibold mb-1">{itemType}</p>
            <p className="text-xs text-primetext font-semibold">{itemQty}</p>
        </div>
      </div>
    </div>
  )
}
