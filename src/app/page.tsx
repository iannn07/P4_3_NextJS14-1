import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold'>Hi Supabase!</h1>
      <h2 className='text-xl m-5'>
        Click the following link to see the difference of your DB
      </h2>
      <ul className='flex flex-col gap-5' id='nav'>
        <li>
          <Link href='/new-view'>New View</Link>
        </li>
        <li>
          <Link href='/auth-client'>Auth Client</Link>
        </li>
        <li>
          <Link href='/auth-server'>Auth Server</Link>
        </li>
        <li>Test</li>
        <li>
          <Link href={'/auth/logout'}>Log Out</Link>
        </li>
      </ul>
    </>
  );
}
