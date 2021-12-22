import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500&family=Poppins:wght@300;400;600&family=Spectral:wght@700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #333;
  --text-primary: Helvetica, Arial, sans-serif;
  --text-secondary: 'Spectral',  georgia;
  font-family: var(--text-primary); 
  padding-top: 4rem;
}

h1,h2,h4,h5, p {
  margin: 0;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mainContainer {
  margin-top: 4rem;
}

img {
  display: block;
  max-width: 100%;
}

button, input {
  display: block;
  font-size: 1rem;
  font-family: var(--text-first);
  color: #333;
}

a {
  text-decoration: none;
}

.tittle {
  font-family: var(--text-secondary);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
}

.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft .3s forwards;
}

@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}

`