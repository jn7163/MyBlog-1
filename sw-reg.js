var serviceWorkerUri='/sw.js';
if('serviceWorker'in navigator){navigator.serviceWorker.register(serviceWorkerUri).then(function(){if(navigator.serviceWorker.controller){console.log('Assets cached by the controlling service worker toolbox.')}else{console.log('Please reload this page to allow the service worker to handle network operations.')}}).catch(function(error){console.log('ERROR: '+error)})}else{console.log('Service workers are not supported in the current browser.')};
window.addEventListener('beforeinstallprompt',event=>{event.userChoice.then(result=>{console.log(result.outcome)})});
