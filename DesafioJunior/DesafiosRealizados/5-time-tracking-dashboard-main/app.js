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

// function calcula(){
//     const botao = document.querySelector('.local-botao')
//     const work = document.querySelector('.side-left-js h3')

//     const alturaBotao = botao.getBoundingClientRect()
//     const alturaWork = work.getBoundingClientRect()
    
//     console.log(alturaBotao.top)
//     console.log(alturaWork.top)
// }

// calcula()