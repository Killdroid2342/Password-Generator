import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('');

  const getRandomPassword = () => {
    let max = `999999999999`;
    setPassword(Math.floor(Math.random() * max));
    console.log(password);
  };
  const savePassword = () => {
    navigator.clipboard.writeText(password);
    alert(`This is the password that you have copied: ${password}`);
  };
  return (
    <div className='flex flex-col items-center justify-center my-auto h-screen'>
      <div className=' border-2 border-white w-1/2 rounded-md flex flex-col items-center pb-24'>
        <h1 className='font-bold text-3xl text-white mt-10'>
          Password Generator
        </h1>
        <p className='border-2 border-white text-white p-3 rounded-2xl mt-10 font-bold '>
          {password}
        </p>
        <button onClick={getRandomPassword} className='btn'>
          Generate Password
        </button>
        <button className='btn' onClick={savePassword}>
          Copy Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
