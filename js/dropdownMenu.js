/*
* @Author: dutrasr
* @Date:   2016-08-22 01:06:09
* @Last Modified by:   dutrasr
* @Last Modified time: 2016-09-05 17:56:13
*/

$(document).ready(function(){
	$('.dropdown-button').dropdown();
	$('.slider').slider();

	$("#er-button").click(function(){
		//$(".hidden-content").hide();
		$(".er-show").toggle();
		$(".wr-show").hide();
		$(".c-show").hide();
		$(".cn-show").hide();
	});
	$("#er-button2").click(function(){
		//$(".hidden-content").hide();
		$(".er-show2").toggle();
		$(".wr-show2").hide();
		$(".c-show2").hide();
		$(".cn-show2").hide();
	});
	$("#er-button3").click(function(){
		//$(".hidden-content").hide();
		$(".er-show3").toggle();
		$(".wr-show3").hide();
		$(".c-show3").hide();
		$(".cn-show3").hide();
	});


	$("#wr-button").click(function(){
		//$(".hidden-content").hide();
		$(".wr-show").toggle();
		$(".er-show").hide();
		$(".c-show").hide();
		$(".cn-show").hide();
	});
	$("#wr-button2").click(function(){
		//$(".hidden-content").hide();
		$(".wr-show2").toggle();
		$(".er-show2").hide();
		$(".c-show2").hide();
		$(".cn-show2").hide();
	});
	$("#wr-button3").click(function(){
		//$(".hidden-content").hide();
		$(".wr-show3").toggle();
		$(".er-show3").hide();
		$(".c-show3").hide();
		$(".cn-show3").hide();
	});
	
	$("#c-button").click(function(){
		//$(".hidden-content").hide();
		$(".c-show").toggle();
		$(".wr-show").hide();
		$(".er-show").hide();
		$(".cn-show").hide();
	});
	$("#c-button2").click(function(){
		//$(".hidden-content").hide();
		$(".c-show2").toggle();
		$(".wr-show2").hide();
		$(".er-show2").hide();
		$(".cn-show2").hide();
	});
	$("#c-button3").click(function(){
		//$(".hidden-content").hide();
		$(".c-show3").toggle();
		$(".wr-show3").hide();
		$(".er-show3").hide();
		$(".cn-show3").hide();
	});

	$("#cn-button").click(function(){
		//$(".hidden-content").hide();
		$(".cn-show").toggle();
		$(".wr-show").hide();
		$(".c-show").hide();
		$(".er-show").hide();
	});
	$("#cn-button2").click(function(){
		//$(".hidden-content").hide();
		$(".cn-show2").toggle();
		$(".wr-show2").hide();
		$(".c-show2").hide();
		$(".er-show2").hide();
	});
	$("#cn-button3").click(function(){
		//$(".hidden-content").hide();
		$(".cn-show3").toggle();
		$(".wr-show3").hide();
		$(".c-show3").hide();
		$(".er-show3").hide();
	});
});