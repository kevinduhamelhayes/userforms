import "./App.css"
import useForm from "./hooks/useForm"
import Input from "./components/Input"
function App() {
  const [form, handleChange] = useForm({ name: "" })

  console.log(form)
  return (
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
    </form>
  )
}

export default App
