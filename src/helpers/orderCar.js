export const orderedCar = (value, cars) => {
  switch (value) {
    case 'nada':
      return cars.sort((a, b) => a.id - b.id);
    case 'menor':
      return cars.sort((a, b) => a.price - b.price);
    case 'mayor':
      return cars.sort((a, b) => b.price - a.price);
    case 'nuevos':
      return cars.sort((a, b) => b.year - a.year);
    case 'viejos':
      return cars.sort((a, b) => a.year - b.year);
    default:
      return cars.sort((a, b) => a.id - b.id);
  }
};
