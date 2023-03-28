import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  )
}

export default App
