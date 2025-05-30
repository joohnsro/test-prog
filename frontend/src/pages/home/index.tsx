import './index'

function Home(props: any) {
  const { userData, setUserData } = props

  const logout = () => {
    document.cookie = 'session_token='
    setUserData(null)
  }

  return (
    <>
      <h1>Bem-vindo { userData.name }!</h1>
      <p className='back-link'>
        <a onClick={logout}>Sair</a>
      </p>
    </>
  )
}

export default Home
