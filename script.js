document.getElementById('toggle').addEventListener("click", function(){
    document.getElementById("container-one").style.display = 'block'
    document.getElementById("close").style.display = 'block'
})

document.getElementById('close').addEventListener("click", function(){
    document.getElementById("container-one").style.display = 'none'
})

