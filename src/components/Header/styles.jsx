import styled from 'styled-components'
import user from '../../assets/usuario.svg'

export const HeaderContent = styled.header`
background: white;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
position: fixed;
width: 100%;
z-index: 100;
background: white;
top: 0;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  height: 4rem;

  .login {
    color: #333;
    display: flex;
    align-items: center;

    &:after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${user}) no-repeat center center;
      margin-left: 0.5rem;
      position: relative;
      top: -1px;
    }
  }
}
`