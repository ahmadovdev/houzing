import React, {forwardRef} from 'react'
import { Container, Icon, Wrapper } from './style'

const Input = forwardRef(({
  type, 
  onChange, 
  placeholder, 
  name, 
  value, 
  defaultValue,
  width,
  height,
  icon
},
 ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container 
        ref={ref}
        icon={icon}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange} 
        width={width} 
        height={height} 
        type={type}
      />
    </Wrapper>
  )
})

export default Input