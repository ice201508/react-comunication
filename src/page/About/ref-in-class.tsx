import React from "react";

export default class RefInClass extends React.Component {
  // 最简单的通过回调函数的方式获取ref --> ref={(node) => this.node = node}
  // private node: HTMLInputElement | null = null;

  // getInputRef = () => {
  //   console.log(this.node)
  // }

  // render(){
  //   return (
  //     <div>
  //       <input type="text" ref={(node) => this.node = node} />
  //       <button onClick={this.getInputRef}>点击获取ref</button>
  //     </div>
  //   )
  // }

  // 通过api的方式获取
  // 这么创建 HTMLInputElement这个类型要加上，不然ts报错
  node = React.createRef<HTMLInputElement>();
  componentDidMount() {
    this.node.current.focus()
      console.log(this.node)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.node} />
      </div>
    )
  }
  
}