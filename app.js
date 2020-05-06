new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    navigation:true,
    onLeave: function(origin, destination, direction){
        const section = destination.item;
        const title = section.querySelector('h1');
        const parasec = section.querySelectorAll('.description');
        const t1= new TimelineMax({delay:0.4});
        t1.fromTo(title,0.5,{y:'50',opacity:0},{y:'0',opacity:1})
        .fromTo(parasec,0.5,{x:'-50',opacity:0},{x:'0',opacity:1});
        
        console.log(origin.item);
        if(destination.index === 1){
            const img_mountain = document.querySelectorAll('.type-mountain');
            console.log(img_mountain);
            t1.fromTo(img_mountain, 0.7, {x:'100%',opacity:1},{x:'-35%',opacity:0})
            .fromTo(img_mountain[0], 0.7, {opacity:0},{opacity:1});
           
        }

    },
});