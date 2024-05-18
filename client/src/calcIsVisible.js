const r = 6371;

function distanceToHorizon(r, h) {
  return Math.sqrt(2 * r * h + h * h);
}

function calcDistance(coords1, coords2) {
  const lat1 = coords1.latitude;
  const lon1 = coords1.longitude;
  const lat2 = coords2.latitude;
  const lon2 = coords2.longitude;

  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const calcIsVisible = (coords1, coords2, alt) => {
  const result = {};

  result.distance = calcDistance(coords1, coords2);

  result.distToHorizon = distanceToHorizon(r, alt);

  result.isVisible = result.distance < result.distToHorizon;

  return result;
};

export { calcIsVisible };
