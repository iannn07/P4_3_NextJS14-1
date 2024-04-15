'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type dataProps = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [supaData, setSupaData] = useState<dataProps>({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: supaData.email,
        password: supaData.password,
      });

      if (data) {
        console.log(data);
        router.push('/auth-client');
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSupaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='container mx-auto w-[400px]'>
      <h1 className='text-3xl font-bold mb-5'>
        Login to Access auth-client page
      </h1>
      <div className='grid'>
        <h3 className='text-lg mb-1'>Email</h3>
        <input
          className='text-black'
          placeholder='Email'
          type='email'
          name='email'
          value={supaData?.email}
          onChange={handleChange}
        />
      </div>
      <div className='grid mt-5'>
        <h3 className='text-lg mb-1'>Password</h3>
        <input
          className='text-black'
          placeholder='Password'
          type='password'
          name='password'
          value={supaData?.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={login}
          type='button'
          className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
