import React from "react";

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>
}

export default class Child extends React.Component<IProps, {}>{
  constructor(props){
    super(props)
    console.log(2, props)
  }

  render() {
    const {inputRef} = this.props
    return (<div>
      <input type="text" ref={inputRef} />
    </div>)
  }
}