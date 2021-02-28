import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {
        course.parts.map(part => <Part key={part.id} part={part} />)
      }
    </>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((accum, current) => accum + current.exercises, 0)
  return <p><b>Total of {total} exercises</b></p>
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))