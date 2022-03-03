import React from 'react';
import RefInClass from './ref-in-class.tsx';
import RefInFunc from './ref-in-func.tsx';
// 父组件操作子组件dom
import Father  from './components/father.tsx';
import Father2  from './components/father2.tsx';
import Father3  from './components/father3.tsx';

// https://segmentfault.com/a/1190000038406655
// https://juejin.cn/post/6950063294270930980#heading-5

export default class About extends React.Component {
  state = {
    count: 1
  }
  render(){
    return <div>
      {/* <RefInClass data={this.state.count}/> */}
      {/* <RefInFunc /> */}
      {/* <Father /> */}
      {/* <Father2 /> */}
      <Father3 />
    </div>
  }
}