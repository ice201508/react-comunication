import React from "react";

interface IProps {
  getFromSon: (e: HTMLInputElement) => void
}

export default class Child extends React.Component<IProps, {}>{
  constructor(props){
    super(props)
    console.log(2, props)
  }

  render() {
    const {getFromSon} = this.props
    return (<div>
      <input type="text" ref={getFromSon} />
    </div>)
  }
}