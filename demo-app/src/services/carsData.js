export const allCars = async () => {
  const res = await fetch('http://localhost:3060/cars');
  return res.json();
};

export const appendCar = async (newCar) => {

  const res = await fetch('http://localhost:3060/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar),
  });

  const car = await res.json();

  return car;
};

export const replaceCar = async car => {

  await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });

};

export const removeCar = async carId => {

  await fetch('http://localhost:3060/cars/' + encodeURIComponent(carId), {
    method: 'DELETE',
  });

};