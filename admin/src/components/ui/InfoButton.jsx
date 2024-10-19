import React, { useState } from 'react'
import InfoIcon from '../icons/InfoIcon'

const InfoButton = ({ children, content }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <div className='w-4 hover:text-blue-400'>

            <InfoIcon/>
            </div>
            {visible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-2 text-sm text-gray-600 font-normal bg-gray-200 rounded shadow-lg">
                    {content}
                </div>
            )}
        </div>
    );
};

export default InfoButton