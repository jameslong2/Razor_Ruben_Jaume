let indice = 1
let actual = 0
Next()
function sliderFotos(){
    let i
    let fotos = document.querySelectorAll('[class="col col-3 card m-1 p-0"]')
    for(i=0;i<fotos.length;i++){
        fotos[i].style.display = 'none'
    }
        indice++
    
    if(indice>fotos.length){
        indice=1
    }
    document.querySelector('[class="row justify-content-md-center text-center"]').style.margin = "0 0 0 20%"
    fotos[indice-1].style.display="block"
    fotos[indice-1].style.transform="perspective(100em) rotateY(0deg)"
    fotos[indice-1].style.order=2
    fotos[indice-1].onclick=function(){NextNext()}
    
    //izquierda
    if(indice-2<0){
        fotos[fotos.length-1].style.display="block"
        fotos[fotos.length-1].style.order=1
        fotos[fotos.length-1].style.transform="perspective(100em) rotateY(45deg)"
        fotos[fotos.length-1].onclick=function(){NextNext()}
    }else{
        fotos[indice-2].style.display="block"
        fotos[indice-2].style.order=1
        fotos[indice-2].style.transform="perspective(100em) rotateY(45deg)"
        fotos[indice-2].onclick=function(){NextNext()}
    }
    //derecha
    if(indice==fotos.length){
        fotos[0].style.display="block"
        fotos[0].style.transform="perspective(100em) rotateY(-45deg)"
        fotos[0].style.order=3;
        fotos[0].onclick=function(){NextNext()}
    }else{
        fotos[indice].style.display="block"
        fotos[indice].style.transform="perspective(100em) rotateY(-45deg)"
        fotos[indice].style.order=3;
        fotos[indice].onclick=function(){NextNext()}
    }
    actual=indice-1;
}
/*
function NextNext(){
    let i
    let previous
    let next
    let nextofnext
    let previousofprevious
    let fotos = document.querySelectorAll('[class="foto"]')
    for(i=0;i<fotos.length;i++){
        fotos[i].style.display = 'none'
    }
    if(actual==fotos.length-1){
        next=0
    }else{
        next=actual+1
    }
    if(actual==0){
        previous=fotos.length-1
    }else{
        previous=actual-1
    }
    if (previous == 0) {
        previousofprevious = fotos.length - 1
    } else {
        previousofprevious = previous-1
    }
    document.querySelector('[class="row justify-content-md-center text-center"]').style.margin="0 0 0 20%"
    fotos[next].style.zIndex=1
    fotos[next].style.order=2
    fotos[next].style.display="block"
    fotos[next].style.animation="rotate_to_middle 1s forwards"
    fotos[next].onclick = function () { NextNext() }

    if (previous == 0) {
        fotos[fotos.length-2].style.order=-2
        fotos[fotos.length-2].style.display="block"
        fotos[fotos.length - 2].style.visibility = "hidden"
        fotos[fotos.length - 1].style.order = 0
    }
    fotos[actual].style.order=1
    fotos[actual].style.display="block"
    fotos[actual].style.animation = "rotate_to_izquierda 1s forwards"
    fotos[previous].style.display = "block"
    fotos[previous].style.order=0
    fotos[previous].style.animation = "fade_izquierda 1s forwards"
    fotos[previousofprevious].style.display = "block"
    fotos[previousofprevious].style.visibility = "hidden"
    fotos[previousofprevious].style.order=-2
    if(next+1==fotos.length){
        nextofnext=0
    }else{
        nextofnext=next+1
    }
    fotos[nextofnext].onclick=function(){NextNext()}
    fotos[nextofnext].style.zIndex=0
    fotos[nextofnext].style.right="30.75%"
    fotos[nextofnext].style.visibility="visible"
    fotos[nextofnext].style.display="block"
    fotos[nextofnext].style.animation=""
    fotos[nextofnext].style.transform="perspective(100em) rotateY(-45deg)"
    fotos[nextofnext].style.order = 3
    actual++
    if(actual==fotos.length){
        actual=0
    }
}*/
function Next() {
    let i
    let previous
    let next
    let nextofnext
    let nextofnextofnext
    let previousofprevious
    let fotos = document.querySelectorAll('[class="foto"]')
    for (i = 0; i < fotos.length; i++) {
        fotos[i].style.display = 'none'
    }
    if (actual == fotos.length - 1) {
        next = 0
    } else {
        next = actual + 1
    }
    if (actual == 0) {
        previous = fotos.length - 1
    } else {
        previous = actual - 1
    }
    if (previous == 0) {
        previousofprevious = fotos.length - 1
    } else {
        previousofprevious = previous - 1
    }
    if (next + 1 == fotos.length) {
        nextofnext = 0
    } else {
        nextofnext = next + 1
    }
    if (nextofnext + 1 == fotos.length) {
        nextofnextofnext = 0
    } else {
        nextofnextofnext = nextofnext + 1
    }
    if (actual == 0) {
        fotos[actual].style.display = "block"
        fotos[actual].style.order = 2
        fotos[actual].style.animation = "rotate_to_izquierda 1s forwards"
        //
        fotos[next].style.display = "block"
        fotos[next].style.order = 3
        fotos[next].style.animation = "rotate_to_middle 1s forwards"
        //
        fotos[previous].style.display = "block"
        fotos[previous].style.order = 1
        fotos[previous].style.animation = "fade_izquierda 1s forwards"
        //
        fotos[previousofprevious].style.display = "block"
        fotos[previousofprevious].style.visibility = "hidden"
        fotos[previousofprevious].style.order = 0
        //
        fotos[nextofnext].style.display = "block"
        fotos[nextofnext].style.order = 4
        fotos[nextofnext].style.animation = "fade_izquierda2 1s forwards"
        fotos[nextofnext].style.zIndex = 1
        //
        fotos[nextofnextofnext].style.display = "block"
        fotos[nextofnextofnext].style.visibility = "visible"
        fotos[nextofnextofnext].style.order = 5
        fotos[nextofnextofnext].style.animation = "fade_derecha 1s forwards"
        fotos[nextofnextofnext].style.zIndex = 0
    } else {
        fotos[actual].style.display = "block"
        fotos[actual].style.order = 2
        fotos[actual].style.animation = "rotate_to_izquierda 1s forwards"
        //
        fotos[next].style.display = "block"
        fotos[next].style.order = 3
        fotos[next].style.animation = "rotate_to_middle 1s forwards"
        //
        fotos[previous].style.display = "block"
        fotos[previous].style.order = 1
        fotos[previous].style.animation = "fade_izquierda 1s forwards"
        //
        fotos[previousofprevious].style.display = "block"
        fotos[previousofprevious].style.visibility = "hidden"
        fotos[previousofprevious].style.order = 0
        //
        fotos[nextofnext].style.display = "block"
        fotos[nextofnext].style.order = 4
        fotos[nextofnext].style.animation = "fade_izquierda2 1s forwards"
        fotos[nextofnext].style.zIndex = 1
        //
        fotos[nextofnextofnext].style.display = "block"
        fotos[nextofnextofnext].style.visibility = "visible"
        fotos[nextofnextofnext].style.order = 5
        fotos[nextofnextofnext].style.animation = "fade_derecha 1s forwards"
        fotos[nextofnextofnext].style.zIndex = 0
    }
    document.querySelector('[class="row justify-content-md-center text-center"]').onclick = function () { Next() }
    actual++
    if (actual == fotos.length) {
        actual = 0
    }
}