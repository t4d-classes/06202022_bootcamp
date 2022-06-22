export const CarViewRow = ({
  car,
  onDeleteCar: deleteCar
}) => {

  // const car = props.car;
  // const { car } = props; // destructuring

  return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button type="button"
          onClick={() => deleteCar(car.id)}>Delete</button></td>
    </tr>    
  )

};