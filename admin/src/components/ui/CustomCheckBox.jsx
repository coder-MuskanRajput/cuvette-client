import React from 'react'

const CustomCheckBox = ({ checked, label }) => {
  return (
    <div className={`w-fit p-4 py-1 rounded-full flex items-center justify-center  border-2  ${checked ? 'border-blue-500 bg-blue-100 font-semibold':'border-gray-500'} shadow-md text-sm`}>
        {label}
    </div>
  )
}

export default CustomCheckBox