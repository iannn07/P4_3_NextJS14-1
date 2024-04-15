'use client';

import { supabase } from '@/lib/supabase';
import React, { useEffect } from 'react';

const Session = () => {
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    console.log(session, error);
    return session;
  };

  const refreshSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.refreshSession();

    console.log(session, error);
    return session;
  };

  const setSession = async (access_token: string, refresh_token: string) => {
    const {
      data,
      error,
    } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    console.log(data, error);
    return data;
  };

  useEffect(() => {
    getSession();
  }, []);

  return <div>Session</div>;
};

export default Session;
