import React from "react";
import Child from './child.tsx';

// class类组件  父组件向子组件传递 createRef的值
export default class Father extends React.Component{
  private inputRef = React.createRef<HTMLInputElement>();

  componentDidMount(): void {
    console.log(this.inputRef)
    this.inputRef.current.focus();
  }

  render() {
    return (<div>
      <Child inputRef={this.inputRef} />
    </div>)
  }
}