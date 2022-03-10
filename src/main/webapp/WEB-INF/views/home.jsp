<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="cpath">${pageContext.request.contextPath }</c:set>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>날씨</title>
<style>
	h4{
		text-align: right;
	}
	.now{
		display: flex;
		width: 300px;
		height: 20px;
		margin: 10px auto;
		
	}
	#weather,#temp,#day{
		display:flex;
	}
	#weather > .data,
	#temp > .data,
	#day>.day{
		border: 1px solid black;
		width: 150px;
		height: 40px;
		text-align: center;
		
	}
	#day>.day{
		padding-top: 10px;
	
	}
	.now >.clock_date{
		display: inline-block;
	}
	.now>.clock{
		display: inline-block;
		margin-left: 10px;
	}
</style>

</head>
<body>
<script src="${cpath }/resources/js/function.js"></script>
<h1>통합구현A형</h1>
<h4>응시자 : 김재령</h4>
<hr>
<div class="now" >
	<div class="clock_date"></div>
	<div class="clock"></div>
</div>

<div id="day"></div>
<div id="weather"></div>

<div id="temp"></div>

<script>
	const weather_f = document.getElementById('weather')
	const temp_f = document.getElementById('temp')
	const day = document.getElementById('day')
	const cpath = '${cpath}'
	const clock = document.querySelector('.clock');
	const clock_date = document.querySelector('.clock_date');
	
	console.log(weather)
	console.log(temp)
	
	window.addEventListener('load',function(){
		init()
	})
	window.addEventListener('load',function(){
		getDay()
	})
 	window.addEventListener('load',function(){
		getWeatherData()
	}) 
 	window.addEventListener('load',function(){
		getTempData()
	}) 
	

</script> 



</body>
</html>