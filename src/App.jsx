import "./index.css"
import useForm from "./hooks/useForm"
import Card from "./components/Card"
import Container from "./components/Container"
import Input from "./components/Input"
import Button from "./components/Button"
function App() {
  const [form, handleChange] = useForm({ name: "" })

  console.log(form)
  return (
    <Container>
      <Card>
        <div>
          <form action="">
            <Input
              label="nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="apellido"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            <Input
              label="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Button> Enviar </Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default App
