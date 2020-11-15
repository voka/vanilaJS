const weather = document.querySelector(".js-weather");



const API_KEY = "d33ec758b11024818d927dce0f83ff98";
const COORDS = "coords";


// fetch 를 통해 데이터를 받아오고 나서 코드가 실행 되도록 하는 것이 then의 역할
function getWeather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json)
    const temperature = json.main.temp;
    const place = json.name;
    const country = json.sys.country;
    weather.innerHTML = `${temperature}°C, ${place} in ${country}`;
  });
}


function handleleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //변수와 그 값의 이름이 같을때 지정할 수 있는 방법
  const coords_Obj={
    latitude,
    longitude
  };
  saveCoords(coords_Obj);
  getWeather(latitude,longitude);
}
function saveCoords(coords_Obj){
  localStorage.setItem(COORDS,JSON.stringify(coords_Obj));
}
function handleGeoError(){
  console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleleGeoSucces,handleGeoError);
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords == null){
    askForCoords();
  }
  else{
      const parsedCoords= JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude,parsedCoords.longitude);
  }
}
function init(){
  loadCoords();
}

init();
