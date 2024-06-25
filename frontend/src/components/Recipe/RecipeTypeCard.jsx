import React from "react";

export default function RecipeTypeCard({ typeKey, typeVal, typeIcon }) {
  return (
    <div className="w-max ml-5 h-max py-2 border border-gray-100 rounded-lg px-4 flex items-center justify-between">
      {typeIcon}
      <div className="flex flex-col">
        <h3 className="text-primetext text-sm leading-6 font-semibold">
          {typeKey}
        </h3>
        <p className="text-xs font-semibold text-primary capitalize">{typeVal}</p>
      </div>
    </div>
  );
}
