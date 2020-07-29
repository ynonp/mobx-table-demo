import Data from './data';

setInterval(function() {
  Data.addRow([Math.random(), Math.random()]);
}, 2000);
