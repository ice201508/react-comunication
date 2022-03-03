import React from "react";

interface IProps {
  ref: any
}

// const Child = (props: IProps) => {
//   const {ref} = props;

//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }

const Child = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  console.log(props, ref)
  return (
    <div>
      <input type="text" ref={ref} {...props} />
    </div>
  )
})
export default Child