(function(){ //good practice to wrap the javascript inside a closure.
  var app = angular.module('gemStore', []);

  app.controller('storeController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description : ''
  };

})();
