(function(){ //good practice to wrap the javascript inside a closure.
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {name: 'Ruby',
    price: 200,
    shine: 12,
    description : 'The Pink gem stone',
    images: [
      "images/ruby1.jpg",
      "images/ruby2.jpg",
      "images/ruby3.jpg"
    ],
  },
    {name: 'Sapphire',
    price: 500,
    shine: 15,
    description : 'The Blue gem stone',
    images: [],
  },
    {name: 'Emerald',
    price: 300,
    shine: 10,
    description : 'The Green gem stone',
    images: [
      "images/emerald1.jpg",
      "images/emerald2.jpg",
      "images/emerald3.jpg"
    ],
  }
  ];

})();
