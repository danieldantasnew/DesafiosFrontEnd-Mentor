function toggleLayout(){
    const sideLeft = document.querySelectorAll('.side-left-js');
    const sideRight = document.querySelectorAll('.side-right-js')
    const lastWeek = document.querySelectorAll('.last-week-js')
    const sizeScreen = window.matchMedia("(min-width: 800px)").matches

    if(sizeScreen){
        sideLeft.forEach((item, index)=>{
            item.appendChild(lastWeek[index])
        })
    }
    else{
        sideRight.forEach((item, index)=>{
            item.appendChild(lastWeek[index])
        })
    }  
}

window.onresize = ()=>{
    toggleLayout();
}

toggleLayout();