import "./index.css"
import useForm from "./hooks/useForm"
import Card from "./components/Card"
import Container from "./components/Container"
import Input from "./components/Input"
import Button from "./components/Button"
import { useState } from "react"
function App() {
  const [form, handleChange, reset] = useForm({ name: "", lastname: "", email: "" })
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, form])
    reset()
  }


  return (
    <Container>
      <Card>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <Input
              label="nombre"
              name="name"
              placeholder="Escribe tu nombre"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="apellido"
              name="lastname"
              placeholder="Escribe tu apellido"
              value={form.lastname}
              onChange={handleChange}
            />
            <Input
              label="email"
              name="email"
              placeholder="Escribe tu email"
              value={form.email}
              onChange={handleChange}
            />
            <Button> Enviar </Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} {user.lastname} - {user.email}
            </li>
          ))}

        </ul>
      </Card>
    </Container>
  )
}

export default App
