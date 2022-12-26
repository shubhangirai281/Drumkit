window.addEventListener("load", () =>{
    const sound= document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");
    const visual= document.querySelectorAll(".visual");
    const colours= [
    "#AAECFC",
    "#C37EDB",
    "#c3f6a6",
    "#88A3E2",
    "#FC8DCA",  
    "#9282ce"
    ];

//sounds
pads.forEach((pads,index) =>{
    pads.addEventListener('click', function(){
         sound[index].currentTime =0;
         sound[index].play();

         createBubble(index);
    })
})


})