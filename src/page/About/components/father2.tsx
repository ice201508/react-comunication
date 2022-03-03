import React from "react";
import Child from './child2.tsx';

// class类组件  通过回调函数的方式获取ref的值
export default class Father extends React.Component{
  private inputRef: HTMLInputElement | null = null;

  componentDidMount(): void {
    console.log(this.inputRef)
    this.inputRef?.focus();
  }

  // 相当于子向父传值，父组件向子组件传递一个函数，子组件的值放在参数里面
  getFromSon = (e: HTMLInputElement) => {
    console.log(111,e)
    this.inputRef = e;
  }

  render() {
    return (<div>
      <Child getFromSon={this.getFromSon} />
    </div>)
  }
}