import Input from "./Input"
import Button from "./Button"
import useForm from "./hooks/useForm"

const UserForm = ({handleSubmit}) => {
  const handleSubmit = (e) => {
    const [form, handleChange, reset] = useForm({
      name: "",
      lastname: "",
      email: "",
    })
    e.preventDefault()
    setUsers([...users, form])
    reset()
  }
  return (
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
  )
}
export default UserForm
