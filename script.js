var t1 = gsap.timeline()
// nav bar
t1.from("nav",{
    y:-100,
    opacity:0,
    stagger:0.3
})
t1.from("nav>h1",{
    y:-150,
    opacity:0,
   
})
t1.from("nav>h2",{
    y:-150,
    opacity:0,
    stagger:0.1
})
t1.from("nav>h3",{
    y:-150,
    opacity:0, 
})
// // content
t1.from("#center,#overtext>h1,#overtext1",{
    x:100,
    overflow:"hidden",
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#center",
        scroller:"#main",
        start:"top 5%",
       end:"top 10%",
        scrub:2,
        pin:true,
    }
})


// // scroll images
t1.from(".scrollContainer",{
    opacity:0,
    stagger:0.2 ,
    scrollTrigger:{
        trigger:"#scroll",
        scroller:"#main",
        start:"top 20%",
        end:"top 10%",
        scrub:2,
        pin:true,
    }
})
t1.from(".scrollContainer img",{
    opacity:0,
    stagger:0.2 
})

// // ABCD SECTION
t1.from("#abcd>h2,#abcd>h5",{
    opacity:0,
    stagger:0.1 ,
    scrollTrigger:{
        trigger:"#abcd",
        scroller:"#main",
        start:"top 20%", 
        end:"top 10%",
        scrub:2,
        pin:true,
    }
})
// page 1
t1.from("#page1,.page1left>img,.page1left>h1,.page1right>img,.text,.text>h2,.text>h6",{
    x:100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 30%", 
        end:"top 10%",
        scrub:2,
        pin:true,
    }
})
// page 2
t1.from("#page2 img,#page2 h1,.aside-right>img",{
    x:100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 20%",
         
        end:"top 10%",
        scrub:2,
        pin:true,
    }
})
// UPDATE-SECTION
t1.from("#Update-section, #Update-section h1,#Update-section h2,#Update-section p",{
        x:100,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#Update-section",
            scroller:"#main",
            start:"top 30%",
            end:"top 10%",
            scrub:2,
            pin:true,
        }
    })
// page3
t1.from(".page3left,.page3left img, .page3right h1,.page3right h2,.page3right h6,.imgs img",{
        x:100,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 20",
            end:"top 10%",
            scrub:2,
            pin:true,
        }
    })

    // section
t1.from("section,.section-center img, .section h1",{
        x:100,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
            trigger:"section",
            scroller:"#main",
            start:"top 20",  
            end:"top 10%",
            scrub:2,
            pin:true,
        }
    })
