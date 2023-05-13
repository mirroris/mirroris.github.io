function submitCode(){
  var strid = "";
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.paiza.io/runners/create', true);
  xhr.requestType = 'json';
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  var params = {
    source_code:document.forms['code'],
    language:document.forms['language'],
    input:"",
    longpoll:"",
    longpoll_timeout:"",
    api_key:"guest"
  };
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
    else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
};