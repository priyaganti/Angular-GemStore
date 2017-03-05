(function(){ //good practice to wrap the javascript inside a closure.
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {name: 'Ruby', price: 200, description : 'The Pink gem stone'},
    {name: 'Sapphire', price: 500, description : 'The Blue gem stone'},
    {name: 'Emerald', price: 300, description : 'The Green gem stone'}
  ];

})();
