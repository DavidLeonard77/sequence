"use strict";angular.module("mbcApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).controller("storeCtrl",["$scope","$http",function(a,b){a.storeData={},$.get("http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/catalog.json",function(b){a.storeData=b,a.$apply(),a.$on("postCarouselDirective",function(a,b,c){$(".carousel-inner > div:first-child").addClass("active"),$("#myCarousel li:first-child").addClass("active")})})}]).directive("postCarouselDirective",function(){return function(a,b,c){a.$last&&setTimeout(function(){a.$emit("postCarouselDirective",b,c)},1)}});