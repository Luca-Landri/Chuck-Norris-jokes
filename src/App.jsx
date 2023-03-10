import styled from 'styled-components'
import './App.css'
import Theme from "./assets/Theme";


const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-family: "Dobro-Drunk";
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
`

function App() {

  return (
    <Theme>
      <Container>
        <Title>Chuck Norris</Title>
      </Container>
    </Theme>
  )
}

export default App
