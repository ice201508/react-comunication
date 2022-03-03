import React from "react";

interface IProps {
  ref: React.RefObject<HTMLInputElement>
}

// const Child = (props: IProps) => {
//   const {ref} = props;

//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }

const Child2 = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  console.log(props, ref)
  return (
    <div>
      <input type="text" ref={ref} {...props} />
    </div>
  )
})
export default Child