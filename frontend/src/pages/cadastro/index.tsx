import { useState, type ChangeEvent, type FormEvent } from 'react';
import './index'
import { addUser } from '../../services/api';
import { Link } from 'react-router-dom';
import type { CadastroFormData } from '../../types/user';

function Cadastro() {
  const [formData, setFormData] = useState<CadastroFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if ( formData.password != formData.confirmPassword ) {
      setMessage('As senhas precisam ser iguais.')
      return
    }

    await addUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
      .then(() => setMessage('Usuário adicionado com sucesso.'))
      .catch(() => setMessage('Ocorreu um erro e o usuário não pôde ser adicionado.'))
  }

  return (
    <>
      { message ? <p>{message}</p> : <></> }
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required={true}
        />
        <input 
          type="email" 
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
          placeholder="Senha"
          required={true}
        />
        <input 
          type="password" 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirme sua senha"
          required={true}
        />
        <button>Enviar</button>
      </form>
      <p className='back-link'>
        <Link to="/">Voltar para tela de login</Link>
      </p>
    </>
  )
}

export default Cadastro
