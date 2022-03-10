function getDom1(temp) {

		
	let dom=`<div class="data">${temp.L_3}℃ ~ ${temp.H_3}℃</div>`
		dom+=`<div class="data">${temp.L_4}℃ ~ ${temp.H_4}℃</div>`
		dom+=`<div class="data">${temp.L_5}℃ ~ ${temp.H_5}℃</div>`
		dom+=`<div class="data">${temp.L_6}℃ ~ ${temp.H_6}℃</div>`
		dom+=`<div class="data">${temp.L_7}℃ ~ ${temp.H_7}℃</div>`
		dom+=`<div class="data">${temp.L_8}℃ ~ ${temp.H_8}℃</div>`
		dom+=`<div class="data">${temp.L_9}℃ ~ ${temp.H_9}℃</div>`
		dom+=`<div class="data">${temp.L_10}℃ ~ ${temp.H_10}℃</div>`
	

	return dom
}

function getDom2(weather) {	
	let dom =`<div class="data">${weather.W_3}</div>`
	dom+=`<div class="data">${weather.W_4}</div>`
	dom+=`<div class="data">${weather.W_5}</div>`
	dom+=`<div class="data">${weather.W_6}</div>`
	dom+=`<div class="data">${weather.W_7}</div>`
	dom+=`<div class="data">${weather.W_8}</div>`
	dom+=`<div class="data">${weather.W_9}</div>`
	dom+=`<div class="data">${weather.W_10}</div>`

	return dom
}

function getDay(){
	let today = new Date()
	let year = today.getFullYear()
	let month = today.getMonth()+1
	
	let date = ''
	for(let i=0 ;i<=7; i++){
		
		let day = today.getDate()+3
		let date_v=(year+'.'+month+'.'+(day+i))
		
		date+=`<div class="day">${date_v}</div>`
		
	}
	day.innerHTML+=date
}
function getTempData() {	
	const url = cpath + '/temp'
	const opt = {
		method: 'GET'
	}
	fetch(url, opt)
	.then(resp => resp.json())
	.then(json => {
		console.log('t',json)
		const header = json.response.body.items.item
		
		const temp =new Object()
		
		temp.L_3 = header.taMin3
		temp.H_3 = header.taMax3
		
		temp.L_4 = header.taMin4
		temp.H_4 = header.taMax4
		
		temp.L_5 = header.taMin5
		temp.H_5 = header.taMax5

		temp.L_6 = header.taMin6
		temp.H_6 = header.taMax6
		
		temp.L_7 = header.taMin7
		temp.H_7 = header.taMax7
		
		temp.L_8 = header.taMin8
		temp.H_8 = header.taMax8
		
		temp.L_9 = header.taMin9
		temp.H_9 = header.taMax9
		
		temp.L_10 = header.taMin10
		temp.H_10 = header.taMax10


		console.log(temp)
		
		let dom=`<div class="data">3일후 기온<br>${temp.L_3} ~ ${temp.H_3}</div>`
			dom+=`<div class="data">4일후 기온<br>${temp.L_4} ~ ${temp.H_4}</div>`
			dom+=`<div class="data">5일후 기온<br>${temp.L_5} ~ ${temp.H_5}</div>`
			dom+=`<div class="data">6일후 기온<br>${temp.L_6} ~ ${temp.H_6}</div>`
			dom+=`<div class="data">7일후 기온<br>${temp.L_7} ~ ${temp.H_7}</div>`
			dom+=`<div class="data">8일후 기온<br>${temp.L_8} ~ ${temp.H_8}</div>`
			dom+=`<div class="data">9일후 기온<br>${temp.L_9} ~ ${temp.H_9}</div>`
			dom+=`<div class="data">10일후 기온<br>${temp.L_10} ~ ${temp.H_10}</div>`
			
			console.log(dom)
		
			temp_f.innerHTML+=dom

	})
}




function getWeatherData() {	
	const url = cpath + '/weather'
	const opt = {
		method: 'GET'
	}
	fetch(url, opt)
	.then(resp => resp.json())
	.then(json => {
		console.log('w',json)
		const weather =new Object()
		weather.W_3 = json.response.body.items.item.wf3Am 
		weather.W_4 = json.response.body.items.item.wf4Am 
		weather.W_5 = json.response.body.items.item.wf5Am 
		weather.W_6 = json.response.body.items.item.wf6Am 
		weather.W_7 = json.response.body.items.item.wf7Am 
		weather.W_8 = json.response.body.items.item.wf8 
		weather.W_9 = json.response.body.items.item.wf9 
		weather.W_10 = json.response.body.items.item.wf10 
		
		console.log(weather)
		
		let dom =`<div class="data">3일후 날씨<br>${weather.W_3}</div>`
			dom+=`<div class="data">4일후 날씨<br>${weather.W_4}</div>`
			dom+=`<div class="data">5일후 날씨<br>${weather.W_5}</div>`
			dom+=`<div class="data">6일후 날씨<br>${weather.W_6}</div>`
			dom+=`<div class="data">7일후 날씨<br>${weather.W_7}</div>`
			dom+=`<div class="data">8일후 날씨<br>${weather.W_8}</div>`
			dom+=`<div class="data">9일후 날씨<br>${weather.W_9}</div>`
			dom+=`<div class="data">10일후 날씨<br>${weather.W_10}</div>`
				
		weather_f.innerHTML+=dom
		
	})
	
	
}


function getDate(){
    const today= new Date()
    console.log(today)
    const date = today.toLocaleDateString() 
    clock_date.innerText=`${date}`
    
}

function getTime(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clock.innerText = `${hours < 12 ? `오전 ${hours}` : `오후 ${hours-12}`}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getDate();
    getTime();
    setInterval(getTime, 1000);
}




