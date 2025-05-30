import { useState, type ChangeEvent, type FormEvent } from 'react'
import './index'
import { authorizeUser } from '../../services/api';
import type { LoginFormData } from '../../types/user';
import { Link } from 'react-router-dom';
import { getCookie } from '../../services/cookies';

function Login(props: any) {
  const { setUserData } = props
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await authorizeUser({
      email: formData.email,
      password: formData.password,
    })
      .then(async () => {
        let userToken: string | null = getCookie('session_token')
        if ( userToken ) {
          const parsed = JSON.parse(atob(decodeURIComponent(userToken)))
          setUserData(parsed)
        }
      })
      .catch(() => setMessage('Usuário não encontrado'))
  }

  return (
    <>
      { message ? <p>{message}</p> : <></> }
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required={true}
        />
        <input 
          type="password"
          name="password" 
          value={formData.password}
          onChange={handleChange}
          placeholder='Senha'
          required={true}
        />
        <button>Enviar</button>
      </form>
      <p className='back-link'>
        <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </>
  )
}

export default Login
