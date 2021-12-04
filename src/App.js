import styled from "styled-components";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container>
      <CardContainer></CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #cce6f4;
`;

export default App;
