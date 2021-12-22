import { InputDog } from './styles'


export const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <InputDog>
      <label htmlFor={name}>{label}</label>
      <input 
        id={name} 
        name={name} 
        type={type}
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </InputDog>
  )
}