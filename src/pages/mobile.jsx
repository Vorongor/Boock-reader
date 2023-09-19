import LogForm from 'components/logForm/logForm';
import Quote from 'components/quote/quote';
import RegForm from 'components/regForm/regForm';
import Header from 'layuot/Header';
import React from 'react';
import { useSelector } from 'react-redux';

function MobileAuth() {
  const userExist = useSelector(state => state.auth.userExist);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {userExist ? <LogForm /> : <RegForm />}
      </div>
      {userExist && <Quote />}
    </div>
  );
}
export default MobileAuth;
