export const filteredCar = (value, cars) => {
  switch (value) {
    case 'todos':
      return cars;
    case 'autos':
      return cars.filter((c) => c.segment === 'Autos');
    case 'pickups':
      return cars.filter((c) => c.segment === 'Pickups y Comerciales');
    case 'suvs':
      return cars.filter((c) => c.segment === 'SUVs y Crossovers');
    default:
      return cars;
  }
};
