import {UseEvent} from 'src/use/event/UseEvent'
import {useState} from 'react'

interface TestProps {
  msg: string | number | undefined
}

export const Test = (props: TestProps) => {
  return <div>{props.msg}</div>
}

export const TodoList = () => {
  // const [value, setState] = useState(11)
  // const increment = () => {
  //   setState(value + 1)
  // }

  const var1 = 50
  const var2 = 60
  let total = 0
  const [result, setState] = useState(0)
  const plusButton = () => {
    total = var1 + var2
    setState(total)
    console.log('뿌라스', 'result- ', result, '합계', total)
  }
  const minusButton = () => {
    total = var1 - var2
    setState(total)
    console.log('마이나스', 'result- ', result, '합계', total)
  }
  return (
    <main className="text-purple">
      {/* hello Bichi {value}
      <button onClick={increment}>눌러라</button>
      <UseEvent /> */}
      <Test msg="나와라" />
      <div>
        <button type="button" onClick={plusButton}>
          +
        </button>
        <button type="button" onClick={minusButton}>
          -
        </button>
        <div>
          {var1} {var2} = {result}
        </div>
      </div>
    </main>
  )
}
