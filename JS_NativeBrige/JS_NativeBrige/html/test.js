
var mapCollection ={};

function getToken() {
    
    const messageId = "100000000";
    mapCollection[messageId]= function(token){
        console.log(token);
    };

   var param =  {"requireBack":true,"method":"customFunction","messageId":messageId,"messageBody":{}};


   window.webkit.messageHandlers.openBrowser.postMessage(param);
}


function protocolURL(){
  let iframe = document.createElement('IFRAME');
  iframe.setAttribute('src','ald://showToast?message="点我试试看"');
  iframe.setAttribute('style','display:none');
  document.documentElement.appendChild(iframe);
  iframe.parentNode.removeChild(iframe);
  iframe = null;
}
// 显示 toast 弹窗
function jsExportToastStr(){

   var locationMessage = NativeFunction.showTost('JSExport Toast');

   console.log(locationMessage);
}
function jsExportToastArray(){

  var array = ["name","age","sex"]
   var locationMessage = NativeFunction.showArray(array);
}
function jsExportToastDict(){

  var dict = {"name":"lili","age":18,"sex":'boy'}

   var locationMessage = NativeFunction.showDict(dict);
}
// 显示 toast 弹窗
function jsExportLocation(){

  var locationMessage = NativeFunction.getCurrentLocation();

  document.getElementById("location_text").innerHTML = locationMessage;
   console.log(locationMessage);
}
function postMessage(){


   var param =  {"requireBack":true,"method":"customFunction","messageId":'100',"messageBody":{}};
   window.webkit.messageHandlers.openBrowser.postMessage(param)
    console.log(param);

}
function promptMessage(){

  var name=prompt("Please enter your name","")
}


function customFunction(obj){
   console.log(obj);
   var dict =  JSON.parse(obj);

   const messageBody = dict["messageBody"];
   const messageId =  dict["messageId"];

   mapCollection[messageId](messageBody);

   delete mapCollection[messageId]
}

function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src       = e.target.result;
      document.getElementById("b64").innerHTML = e.target.result;
      window.webkit.messageHandlers.openBrowser.postMessage(e.target.result);
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

document.getElementById("inp").addEventListener("change", readFile);

