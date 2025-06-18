const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 30
  const b = 20
  return (
    <div>
      <p>Hellow world, it is currently {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name = 'George' age = {26+10}/>
      <Hello name = 'Ani' age = {22}/>
      <Hello name = 'Jasmeet' age = {54}/>
    </div>
  )
}

export default App