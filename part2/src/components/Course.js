const Header = ({ course }) => {
  return <h2>{course.name}</h2>
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

export const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}