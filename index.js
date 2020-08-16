let musicSeekHandler;
let currentSeekLength=0; 

document.querySelectorAll(".playButton").forEach((button)=>{
    const progress=button.parentElement.querySelector(".progress")
    const progressBar=progress.querySelector(".progress-bar")
    
    button.addEventListener("click",()=>{console.log("j");
    button.style.display="none";
    button.parentElement.querySelector(".pauseButton") .style.display="block";
    let music=document.querySelector(".myAudio");

    music.play();
    progress.classList.remove("d-none")
    const progressWidth=100/music.duration;
   
     musicSeekHandler=setInterval(()=>{            
       
       currentSeekLength+=progressWidth;
      console.log(currentSeekLength);
      console.log(progressBar)
       progressBar.style.width=`${currentSeekLength}%`

       prevSeekLength=currentSeekLength;
    },1000)

})
})

document.querySelectorAll(".pauseButton").forEach((button)=>{
    
    button.addEventListener("click",()=>{console.log("j");
    button.style.display="none";
    button.parentElement.querySelector(".playButton") .style.display="block";
    document.querySelector(".myAudio").pause();
    const progress=button.parentElement.querySelector(".progress")
    const progressBar=progress.querySelector(".progress-bar")
     progress.classList.add("d-none")
     clearInterval(musicSeekHandler)

})
})