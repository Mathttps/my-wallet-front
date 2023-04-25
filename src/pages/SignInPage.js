import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function SignInPage() {

  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function login(event) {
    event.preventDefault()

    const URL = "http://localhost:5000/login"

    axios.post(URL, formData)
      .then(response => {
        setToken(response.data.token)
        navigate("/home")
      })
      .catch(error => {
        alert(`Algo deu errado! Tente novamente mais tarde!`)
        console.log(error)
      })
  }

  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input placeholder="Senha"
          type="password"
          autocomplete="new-password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
