setInterval(() => {
    date=new Date()
    seconds=date.getSeconds()
    hours=date.getHours()
    minutes=date.getMinutes()
//----Conversion of Real time into Degrees----
    rotationofseconds= seconds*6
    rotationofminutes= minutes*6
    rotationofhours= (hours + minutes/60)*30
    console.log(date)

//----Styling With CSS----
    second.style.transform=`rotate(${rotationofseconds}deg)`
    minute.style.transform=`rotate(${rotationofminutes}deg)`
    hour.style.transform=`rotate(${rotationofhours}deg)`

}, 1000);