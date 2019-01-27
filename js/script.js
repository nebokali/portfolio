"use strict";

var sliderControl = document.querySelectorAll(".slider__control-button");
var sliderItem = document.querySelectorAll(".slider__item");
var sliderItemActive = document.querySelectorAll(".slider__item--active");
var sliderItemNerds = document.querySelector(".slider__item--nerds");
var sliderItemTechnomart = document.querySelector(".slider__item--technomart");
var sliderItemPink = document.querySelector(".slider__item--pink");
var sliderItemKekstagram = document.querySelector(".slider__item--kekstagram");
var sliderControlNerds = document.querySelector(".slider__control-button--nerds");
var sliderControlTechnomart = document.querySelector(".slider__control-button--technomart");
var sliderControlPink = document.querySelector(".slider__control-button--pink");
var sliderControlKekstagram = document.querySelector(".slider__control-button--kekstagram");
var sliderArrowRight = document.querySelector(".slider__arrow--right");
var sliderArrowLeft = document.querySelector(".slider__arrow--left");

var showSlider = function () {
  var currentSlide = sliderItemNerds;
  var currentControl = sliderControlNerds;
  var currentValue = 1;
  
  var switchSlide = function (control, slide) {
  	currentSlide.classList.remove("slider__item--active");
    currentControl.classList.remove("slider__control-button--active");
    currentSlide = slide;
    currentControl = control;
    slide.classList.add("slider__item--active");
    control.classList.add("slider__control-button--active");
  };

  sliderControlNerds.addEventListener("click", function() {
    switchSlide(sliderControlNerds, sliderItemNerds);
    currentValue = 1;
  });
  
  sliderControlTechnomart.addEventListener("click", function() {
    switchSlide(sliderControlTechnomart, sliderItemTechnomart);
    currentValue = 2;
  });
  
  sliderControlPink.addEventListener("click", function() {
    switchSlide(sliderControlPink, sliderItemPink);
    currentValue = 3;
  });
  
  sliderControlKekstagram.addEventListener("click", function() {
    switchSlide(sliderControlKekstagram, sliderItemKekstagram);
    currentValue = 4;
  });

  
  sliderArrowRight.addEventListener("click", function() {
    nextSlide();
  });

  sliderArrowLeft.addEventListener("click", function() {
    prevSlide();
  });

  var nextSlide = function () {
    switch(currentValue) {
      case 1:  
        switchSlide(sliderControlTechnomart, sliderItemTechnomart);
        currentValue = 2;
        break;

      case 2: 
        switchSlide(sliderControlPink, sliderItemPink);
        currentValue = 3;
        break;

      case 3: 
        switchSlide(sliderControlKekstagram, sliderItemKekstagram);
        currentValue = 4;
        break;

      case 4: 
        switchSlide(sliderControlNerds, sliderItemNerds);
        currentValue = 1;
        break;

      default:
        switchSlide(sliderControlTechnomart, sliderItemTechnomart);
        break;
    }
  };

  var prevSlide = function () {
    switch(currentValue) {
     case 1:  
       switchSlide(sliderControlKekstagram, sliderItemKekstagram);
       currentValue = 4;
       break;

     case 4: 
       switchSlide(sliderControlPink, sliderItemPink);
       currentValue = 3;
       break;

     case 3: 
       switchSlide(sliderControlTechnomart, sliderItemTechnomart);
       currentValue = 2;
       break;

     case 2: 
       switchSlide(sliderControlNerds, sliderItemNerds);
       currentValue = 1;
       break;

     default:
       switchSlide(sliderControlKekstagram, sliderItemKekstagram);
       break;
    }
  };
};

showSlider();
