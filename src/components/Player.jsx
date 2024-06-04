import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, ImageURL }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ImageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Team : {team}</Card.Title>
          <Card.Text>Nationality :{nationality}</Card.Text>
          <Card.Text>Number : {jerseyNumber}</Card.Text>
          <Card.Text>Age : {age}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player;
