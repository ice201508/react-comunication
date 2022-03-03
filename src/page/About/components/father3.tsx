import React, { useRef, useEffect, useState } from "react";
import Child from './child3.tsx';

// 函数组件， 通过forwardRef
// 之前ref不能通过props传递，React.forwardRef的出现使之成为可能
const Father = () => {
  // const ref = useRef();
  // const ref2 = React.createRef<HTMLInputElement>();
  
  // useEffect(() => {
  //   console.log(11, ref, ref2) // 两种api得到的是同一种dom元素
  // }, [])

  // return (
  //   <div>
  //     <input type="text" ref={ref} />
  //     <input type="text" ref={ref2} />
  //   </div>
  // )
  const ref = useRef();
  const [count, setCount] = useState(1)
  
  useEffect(() => {
    console.log(11, ref)
    ref?.current.focus();
  }, [])

  return (
    <div>
      <Child ref={ref} count={count} />
    </div>
  )
}

export default Father;