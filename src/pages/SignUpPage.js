import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import axios from "axios"
import { useState } from "react"


export default function SignUpPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  function handleForm(e) {
    const { name, value } = e.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  async function register(m) {
    m.preventDefault()

    const URL = "http://localhost:5000/cadastro"

    try {
      const res = await axios.post(URL, form)
      navigate("/sign-in")
    } catch (err) {
      alert(`Algo deu errado! \n${err.response.data.message} \n`)
      console.error(err)
    }
  }

  return (
    <SingUpContainer>
      <form onSubmit={register}>
        <MyWalletLogo />
        <input placeholder="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
          required
        />

        <input placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleForm}
          required
        />

        <input placeholder="Senha"
          type="password"
          autocomplete="new-password"
          name="password"
          value={form.password}
          onChange={handleForm}
          required
        />

        <input placeholder="Confirme a senha"
          type="password"
          autocomplete="new-password"
          name="confirm-password"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link  to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
