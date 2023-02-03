const wsUrl = "ws://echo-ws-service.herokuapp.com"
let sendMsgBtn = document.querySelector(".send-msg-btn");
let outputField = document.querySelector(".chat-field")
let geoDataBtn = document.querySelector(".geo-data-btn");

let websocket;
websocket = new WebSocket(wsUrl);
  websocket.onopen = function(evt) {
    console.log("CONNECTED");
  };
 
  websocket.onmessage = function(evt) {
    let serverMsg = `
    <div>
      <p>${evt.data}</p>
    </div>
    `
    outputField.innerHTML += serverMsg;
    ;
  };
  


sendMsgBtn.addEventListener('click', function () {
  
  let textMsg = document.querySelector(".text-msg").value;
  let clientMsg = `
  <div class="client-msg">
    <p>${textMsg}</p>
  </div>
`
  outputField.innerHTML += clientMsg;
  document.querySelector(".text-msg").value = "";

  websocket.send(textMsg)
})

geoDataBtn.addEventListener('click', () => {
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    let geoDataMsg = `
    <div class="client-msg">
       <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Гео-локация</a> 
    </div>
    `
    outputField.innerHTML += geoDataMsg;
  }
  navigator.geolocation.getCurrentPosition(success);
})