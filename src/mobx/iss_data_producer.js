import Data from './data';

setInterval(async function() {
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const coords = await response.json();
  Data.addRow([coords.iss_position.latitude, coords.iss_position.longitude]);
}, 2000);
