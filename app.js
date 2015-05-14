'use strict';

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function(){
  this.route('about');
  this.route('credits', {path:'/thanks'});
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