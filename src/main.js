import './styles.css';
import './weekday.js';
import $ from 'jquery';
import 'bootstrap';
import { weekDay } from './weekday.js';

$(document).ready(function () {
  $("button").submit(function (event) {
    event.preventDefault();
    // need to change the html to match 
    let day = new Date($("#year").val(), ("#month").val(), ("#day").val());

    ('#solution').text(weekDay(day));
  })
});
