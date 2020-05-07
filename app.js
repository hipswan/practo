new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    navigation:true,
    onLeave: function(origin, destination, direction){
        const section = destination.item;
        const title = section.querySelector('h1');
        console.log(title);
        const parasec = section.querySelectorAll('.description');
        const t1= new TimelineMax({delay:0.4});
        t1.fromTo(title,0.5,{y:'50',opacity:0},{y:'0',opacity:1})
        .fromTo(parasec,0.5,{x:'-50',opacity:0},{x:'0',opacity:1});
        if(destination.index === 1){
            const section_two = document.querySelector('.s2');
            console.log(section_two);
            t1.fromTo(section_two, 0.7, {opacity:1},{opacity:.3});
           
           
        }

    },
});

$("#login").on('click',(event)=>{
    const t2= new TimelineMax();
    t2.fromTo($(".flip-box-inner")[0], 0.2, 
        {rotationY:0},
        {rotationY:-180});
    
  
});

