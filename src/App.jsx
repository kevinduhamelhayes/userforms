import "./index.css"
import Card from "./components/Card"
import Container from "./components/Container"
import UserForm from "./components/UserForm"
import { useState } from "react"
function App() {
  const [users, setUsers] = useState([])
  return (
    <Container>
      <Card>
        <div>
<UserForm></UserForm>
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
