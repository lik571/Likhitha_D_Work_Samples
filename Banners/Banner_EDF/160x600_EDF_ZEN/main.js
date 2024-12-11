var tl = new TimelineLite();

function obj(item){
  return document.getElementById(item);
}

tl.to([obj('logoBig')], 0.5, {autoAlpha: 0,  ease: "Power1.ease"}, "0.5");
tl.to([obj('logo')], 0.5, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
tl.to([obj('txt'), obj('picto2')], 0.5, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
tl.to([obj('backColor')], 0.5, {width:"100%",  ease: "Power1.ease"}, "+=0");
tl.to([obj('draw')], 0.5, {color: "white", ease: "Power1.ease"}, "-=0.5");
tl.to([obj('txt'), obj('draw'), obj('backColor')], 0.2, {autoAlpha: 0,  ease: "Power1.ease"}, "+=2");
tl.set([obj('txt'), obj('backColor')], {display: "none"});

tl.to([obj('txt2'), obj('picto2')], 0.5, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
tl.to([obj('backColor2')], 0.5, {width:"100%",  ease: "Power1.ease"}, "+=0.5");
tl.to([obj('draw2')], 0.5, {color: "white", ease: "Power1.ease"}, "-=0.5");
tl.to([obj('txt2'), obj('draw2'), obj('backColor2')], 0.2, {autoAlpha: 0,  ease: "Power1.ease"}, "+=2");
tl.set([obj('txt2'), obj('backColor2')], {display: "none"});

tl.to([obj('back'), obj('txt3'), obj('ml2')], 0.2, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
tl.to([obj('backColor3')], 0.5, {width:"100%",  ease: "Power1.ease"}, "+=1");
tl.to([obj('draw3')], 0.5, {color: "white", ease: "Power1.ease"}, "-=0.5");
tl.to([obj('txt3'), obj('draw3'), obj('back'), obj('picto2'), obj('backColor3'), obj('ml2')], 0.2, {autoAlpha: 0,  ease: "Power1.ease"}, "+=2");
tl.set([obj('txt3'), obj('backColor3')], {display: "none"});

tl.to([obj('cta')], 0.2, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
tl.to([obj('ml')], 0.2, {autoAlpha: 1,  ease: "Power1.ease"}, "+=0");
