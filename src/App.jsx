import styled from 'styled-components'
import './App.css'
import Theme from "./assets/Theme";


const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-family: "Dobro-Drunk";
`

function App() {

  return (
    <Theme>
      <Title>Chuck Norris</Title>
    </Theme>
  )
}

export default App
