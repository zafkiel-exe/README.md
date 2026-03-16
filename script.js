fetch("/players")

.then(res=>res.json())

.then(data=>{

document.getElementById("players").innerText = data.length

})
