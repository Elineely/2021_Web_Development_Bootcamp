function anotherAddEventListener (typeOfEvent, callback){
  //Detect the event happens...
  var eventThatHappened{
    eventType : "keypress",
    key : "k",
    durationOfKeypress : 2
  }
  
  if (typeOfEvent === eventThatHappened.eventType){
    callback(eventThatHappened);
  }
  
}

anotherAddEventListener("keypress", function(event){
  console.log(event);
});
