import { Link } from 'react-router-dom'
import './index'

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <p className='back-link'>
        <Link to="/">Voltar</Link>
      </p>
    </>
  )
}

export default NotFound
