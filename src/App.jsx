const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}


const Header = () =>{
  return(<h1> Half Stack Application Development</h1>
  )
  }


const Content = () =>{
  return(
    <div>
      <p>Fundamentals of React</p>
      <p>Using props to pass data</p>
      <p>State of a component</p>
    </div>
  )
}

const Total = () =>{
  return(
    <p>Number of exercises: {10+7+14}</p>
  )
}
export default App