const LoginPage = () => {
  return (
    <form action='/auth/signup' method='post'>
      <label htmlFor='email'>Email</label>
      <input className='text-black' name='email' />
      <label htmlFor='password'>Password</label>
      <input className='text-black' type='password' name='password' />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
