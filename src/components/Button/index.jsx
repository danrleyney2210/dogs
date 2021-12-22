import { ButtonDog } from './styles'


export const Button = ({ children, ...props }) => {
  return (
    <ButtonDog {...props}>
      {children}
    </ButtonDog>
  )
}