import * as React from 'react'

interface HelloProps {
  name: String;
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hey, I am {this.props.name}</div>
  }
}
