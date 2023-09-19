import React from 'react'

export default function PropsFunComp(props) {
  return (
    <div>이 컴포넌트의 이름은 {props.이름}이다. 제작년도는 {props.생년월일}년이다.</div>
  )
}
