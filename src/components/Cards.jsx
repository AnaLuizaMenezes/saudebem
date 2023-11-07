import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="Foto4.jpg" />
        <Card.Body>
          <Card.Title>Medicamentos Fitoterápicos</Card.Title>
          <Card.Text>
          Medicamentos fitoterápicos são produtos farmacêuticos à base de plantas medicinais ou de seus derivados, que são utilizados com finalidades terapêuticas. Eles têm sido usados ao longo da história da humanidade em várias culturas, como uma forma de tratamento natural de diversas condições de saúde. 
          </Card.Text>
          <Button variant="success">Clique aqui para saber mais!</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 11/07/2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="Foto5.jpg" />
        <Card.Body>
          <Card.Title>Como são feitos os remédios?</Card.Title>
          <Card.Text>
          A fabricação de medicamentos é um processo complexo e altamente regulamentado que envolve várias etapas, desde a pesquisa e desenvolvimento até a distribuição.{' '}
          </Card.Text>
          <Button variant="success">Clique aqui para saber mais!</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 11/07/2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="Foto7.jpg" />
        <Card.Body>
          <Card.Title>Remédios fazem mal á saúde?</Card.Title>
          <Card.Text>
          Os medicamentos podem ser extremamente úteis para tratar uma variedade de condições de saúde, aliviar sintomas e melhorar a qualidade de vida das pessoas. No entanto, quando não usados corretamente, ou quando há interações inadequadas com outros medicamentos, substâncias ou condições médicas, os medicamentos podem causar efeitos colaterais e representar riscos à saúde. 
          </Card.Text>
          <Button variant="success">Clique aqui para saber mais!</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 11/07/2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;