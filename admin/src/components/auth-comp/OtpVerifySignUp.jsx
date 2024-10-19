import React, { useState } from 'react'
import EmailOtpVerifySignUp from './EmailOtpVerifySignUp'
import SMSOtpVerifySignUp from './SMSOtpVerifySignUp'

const OtpVerifySignUp = ({companyEmail, setPages}) => {
    const [isBothVerify, setIsBothVerify] = useState({
        email:false,
        sms:false
    });
  return (
    <div  className='px-10 py-10 rounded-md border border-blue-400 shadow-md flex flex-col items-center justify-between gap-2 max-w-lg'
    >
        <p className='text-3xl font-bold'>Sign Up</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <EmailOtpVerifySignUp companyEmail={companyEmail}/>
        <SMSOtpVerifySignUp companyEmail={companyEmail} />
    </div>
  )
}

export default OtpVerifySignUp