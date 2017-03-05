(function(){ //good practice to wrap the javascript inside a closure.
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Ruby',
    price: 100,
    description : 'The pink gem stone'
  };

})();
