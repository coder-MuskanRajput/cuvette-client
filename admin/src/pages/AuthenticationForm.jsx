import React, { useState } from 'react'
import RegistrationForm from '../components/auth-comp/RegistrationForm';
import OtpVerifySignUp from '../components/auth-comp/OtpVerifySignUp';

const AuthenticationForm = () => {

    const [pages, setPages] = useState('signup');
    const [companyEmail, setCompanyEmail] = useState('')


  return (
    <div className="flex justify-between items-center p-5">
      <div className="w-full flex items-center justify-center p-8 text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae
          sit aperiam ullam odio voluptas illo, voluptatem blanditiis ab numquam
          optio amet, iure soluta sed!
        </p>
      </div>
      <div className="w-full">
        {pages === "signup" ? (
          <RegistrationForm setPages={setPages} setCompanyEmail={setCompanyEmail} />
        ) : pages === "login" ? (
          <>signup</>
        ) : pages === "signup-otp" ? (
          <OtpVerifySignUp  setPages={setPages} companyEmail={companyEmail} />
        ) : (
          pages === "login-otp" 
          && 
          <>login otp</>
        )}
      </div>
    </div>
  );
}

export default AuthenticationForm