import * as React from 'react'

interface ClockState {
  date: Date
}

export class Clock extends React.Component<{}, ClockState> {
  timer?: number | NodeJS.Timer
  constructor (props: {}) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer as number)
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  render () {
    return (
      <div>
        <h1>Clock Panel</h1>
        <FormattedDate date={new Date()} />
      </div>
    )
  }
}

interface FormattedDateProps {
  date: Date
}

function FormattedDate (props: FormattedDateProps) {
  return <h2>Now is {props.date.toLocaleTimeString()}. node version: { process.versions.node }</h2>
}

export default Clock
