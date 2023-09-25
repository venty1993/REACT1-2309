import React from 'react'

export default function FlowTest(props) {
  return (
    <div>FlowTest. 카운트는 {props.count}
        <button onClick={props.도구}>자식버튼</button>
    </div>
    
  )
}
