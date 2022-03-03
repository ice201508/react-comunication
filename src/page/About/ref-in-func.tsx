import React, { useEffect, useRef } from "react"

const RefInFunc = () => {
  // 函数组件里面 通过createRef创建ref，写const，直接赋值
  // const node = React.createRef<HTMLInputElement>();
  // useEffect(() => {
  //   if(node.current) {
  //     node.current.focus();
  //   console.log(11,node)
  //   }
  // }, [])
  // const getNode = () => {
  //   console.log(node);
    
  // }
  // return <div>
  //   <input type="text" ref={node} />
  //   <button onClick={getNode}>修改</button>
  // </div>


  // 2. 函数组件里面通过 回调函数的方式获取ref
  // let node: HTMLInputElement | null = null;

  // useEffect(() => {
  //   console.log(11, node)
  // }, [])

  // return <div>
  //   <input type="text" ref={inputParam => node = inputParam} />
  // </div>

  // 3. 通过hooks useRef创建一个ref赋值
  const node = useRef(null)

  useEffect(() =>{
    console.log(node);
    
  }, [])

  return <div>
    <input type="text" ref={node} />
  </div>
}

export default RefInFunc