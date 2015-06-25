'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('', 'cars', function () {
  $.ajax({
    url: 'data/mpg.data',
    method: 'GET'
  })

  console.log(cars);

  // .then(parseCarsCsv)
  // .then(renderCars);

  function parseCarsCsv(carsCsv) {

  //   return bridgesCsv
  //     .split('\n')
  //     .map(function (record) {
  //       var cells = record.split(',');
  //
        return {
          id: cells[0],
          erected: cells[3],
          lanes: cells[6],
          material: cells[9],
          type: cells[12]

        normalized-losses:cells[1],
        make:cells[2],


  fuel-type:cells[3],
  aspiration:[4],
  6. num-of-doors:             four, two.
  7. body-style:               hardtop, wagon, sedan, hatchback, convertible.
  8. drive-wheels:             4wd, fwd, rwd.
  9. engine-location:          front, rear.
 10. wheel-base:               continuous from 86.6 120.9.
 11. length:                   continuous from 141.1 to 208.1.
 12. width:                    continuous from 60.3 to 72.3.
 13. height:                   continuous from 47.8 to 59.8.
 14. curb-weight:              continuous from 1488 to 4066.
 15. engine-type:              dohc, dohcv, l, ohc, ohcf, ohcv, rotor.
 16. num-of-cylinders:         eight, five, four, six, three, twelve, two.
 17. engine-size:              continuous from 61 to 326.
 18. fuel-system:              1bbl, 2bbl, 4bbl, idi, mfi, mpfi, spdi, spfi.
 19. bore:                     continuous from 2.54 to 3.94.
 20. stroke:                   continuous from 2.07 to 4.17.
 21. compression-ratio:        continuous from 7 to 23.
 22. horsepower:               continuous from 48 to 288.
 23. peak-rpm:                 continuous from 4150 to 6600.
 24. city-mpg:                 continuous from 13 to 49.
 25. highway-mpg:              continuous from 16 to 54.
 26.price:                    continuous from 5118 to 45400.













        };
  //     });
  // }
  //
  // function renderBridges(bridgesArray) {
  //   var bridgesTemplate = views['bridges-template'];
  //   var templateFn = _.template(bridgesTemplate, { variable: 'm' });
  //   var bridgesHTML = templateFn({ bridges: bridgesArray });
  //
  //   $('.main-content').html(bridgesHTML);
  // }
});
