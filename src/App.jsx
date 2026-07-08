import { UserDetails } from "./components/UserDetails"

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
      {/* <CardWithoutJSX />
      <ContactFrom /> */}
      {/* <Welcome /> */}
      {/* <Button /> */}
      {/* <StyledForm /> */}
      {/* <Greeting name="Mohan" message="Good morning Mohan" />
      <Greeting name="Clark" message="Good Morning Clark" />
      <Greeting name="Somakshi" message="Good Morning Somakshi" />
      <Greeting /> */}
      {/* <UserCard name="Sanju" city="Indore" age="24" email="developer.sukhendra@gmail.com" /> */}
      {/* <CardWrapper>
        <p>sanju</p>
        <p>sanju@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper> */}
      <UserDetails name="Mohan" isOnline={true} hideOffline={true} />
      {/* <UserDetails name="Deepak" isOnline={false} hideOffline={true} /> */}
    </div>
  )
}

export default App
