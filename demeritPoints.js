// Speed limit 70;
// 5 more -> 1 point
// Math.floor() function should be used
// 12 Points -> suspended

checkSpeed(75);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log(points);
}
