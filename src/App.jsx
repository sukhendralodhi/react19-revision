import { CardWithoutJSX } from "./Card"

function Welcome() {
  return <h2>Hello Welcome</h2>
}

function Button() {
  return <button>Click Me</button>
}

function App() {


  return (
    <div>
      {/* <h1>Hello, React!</h1> */}
      {/* <Hello /> */}
      {/* <HelloWithoutJSX /> */}
      <CardWithoutJSX />
      {/* <Welcome /> */}
      {/* <Button /> */}
    </div>
  )
}

export default App
