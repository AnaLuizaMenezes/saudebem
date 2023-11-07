import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
     
      <Navbar bg="danger" variant="danger">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="Saúde Bem (2).png"
              width="60"
              height="60"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;