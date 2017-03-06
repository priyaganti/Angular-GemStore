(function(){ //good practice to wrap the javascript inside a closure.
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller('GalleryController', function(){
   this.imgIndex = 0;
   this.setCurrent = function(imgNum){
     this.imgIndex = imgNum || 0;
   };
 });

 app.controller('ReviewController',function(){
   this.review = {}; //initialize the review to an empty object
   this.addReview = function(product){ //take in the product and push the current review on the product's reviews array
     product.reviews.push(this.review);
     this.review = {}; //to clear the live preview and reset.
   }
 });

  var gems = [{
    name: 'Ruby',
    price: 200,
    shine: 12,
    description : 'The Pink gem stone',
    images: [
      "images/ruby1.jpg",
      "images/ruby2.jpg",
      "images/ruby3.jpg"
    ],
    reviews:[{
      stars: 5,
      body: "I love this gem!",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Sapphire',
    price: 500,
    shine: 15,
    description : 'The Blue gem stone',
    images: [],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Emerald',
    price: 300,
    shine: 10,
    description : 'The Green gem stone',
    images: [
      "images/emerald1.jpg",
      "images/emerald2.jpg",
      "images/emerald3.jpg"
    ],
    reviews: [{
     stars: 3,
     body: "I think this gem was just OK, could honestly use more shine, IMO.",
     author: "JimmyDean@sausage.com",
     createdOn: 1397490980837
   }, {
     stars: 4,
     body: "Any gem with 12 faces is for me!",
     author: "gemsRock@alyssaNicoll.com",
     createdOn: 1397490980837
   }]
  }];
})();
