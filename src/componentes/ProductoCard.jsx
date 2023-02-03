import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const ProductoCard = (props) => {     
  const {imagen,title,descripcion,id} = props;
  
  return (        
    <div className="card-producto">        
      <Card>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>          
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "black" }}>{descripcion}</Card.Text>
          <Button variant="primary">Ver más (Código: {id})</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductoCard;
