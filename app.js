'use strict';

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function(){
  this.route('about');
  this.route('credits', {path:'/thanks'});
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 10,
  logo: 'images/logo-small.png',
  time: function(){
    return (new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: 'Geoff',
  avatar: 'images/avatar.png',
  open: function(){
    return ((new Date()).getDay() === 0) ? 'Closed' : 'Open';
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
   return App.PRODUCTS;
  }
});
App.PRODUCTS = [
  {
    title: 'Guns',
    price: 100,
    description: 'You dont know what a gun is?',
    isOnSale: true,
    image: 'images/products/flint.png'
  },
  {
    title: 'Butter',
    price: 100,
    description: 'I cant believe its not butter',
    isOnSale: true,
    image: 'images/products/kindling.png'
  }
];
