// src/components/Notification/Toggle.jsx

import React from 'react';

const Toggle = ({ checked, onChange, label }) => {
    return (
        <div className="flex items-center justify-start mb-4">
            <label className="switch relative inline-block w-14 h-8 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox"
                       className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                       checked={checked}
                       
                       onChange={(e)=>onChange(e.target.checked)}
                       style={{ right: checked ? '0' : 'auto', left: checked ? 'auto' : '1px' }}/>
                <span className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"/>
            </label>
            <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
        </div>
    );
};

export default Toggle;
