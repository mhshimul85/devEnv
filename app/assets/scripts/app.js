import Navigation from './modules/Navigation';
import $ from 'jquery';
/* WOW INIT */
import WOW from 'wow.js';
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  live: true
});
new WOW().init();


var navigation = new Navigation();
