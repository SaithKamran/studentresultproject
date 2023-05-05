function add(){

let eng= Number( document.getElementById("p1").value  )

let sci= Number( document.getElementById("p2").value  )

let math= Number( document.getElementById("p3").value  )

let urdu= Number( document.getElementById("p4").value  )
    let sum= eng + sci + math + urdu
    let prcnt= sum * 100 / 400

    // console.log(sum);
document.getElementById("mo").innerHTML=sum

document.getElementById("prcn").innerHTML=prcnt

if(eng > 100 || sci > 100 ||math > 100 ||urdu > 100){
    alert("value exceeded")
    window.location.reload()
}

else if(prcnt < 50){
document.getElementById("grd").innerHTML="fail"

}

else{
    document.getElementById("grd").innerHTML="pASS"
}



}


            



