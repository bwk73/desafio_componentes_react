import './styles.css';
import carImg from "../../assets/car.png";

export default function CarCard() {

  return (
    <div className="dsct-car-card">
      <img src={carImg} alt="Carro" />
      <h4>Lorem ipsum dolor</h4>
    </div>
  );
}
