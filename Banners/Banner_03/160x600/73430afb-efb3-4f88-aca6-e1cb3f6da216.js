function animation_728x90() {
    console.log('file_working');
    //Endframe
    function endFrame() {
      console.log('endFrame()');
    }

    //Timeline
    var loopCounter = 0;
    var tl = gsap.timeline({ delay: 0, repeat: globalTimeline.repeat, repeatDelay: globalTimeline.repeatDelay, onComplete: endFrame });

    tl.addLabel("frame1")
    .to([element.image_1,element.trustmark_logo,element.sc_logo,element.headline], 0, { opacity: 1 }, "frame1")

    tl.addLabel("frame2","+=2")
    .to(element.image_1, 1, { opacity: 0 }, "frame2")
      .to(element.image_2, 2, { opacity: 1 }, "frame2")
      .to(element.headline, 1, { opacity: 0 }, "frame2")
      .to(element.subhead, 2, { opacity: 1 }, "frame2+=1.5")
      .to(element.button, 2, { opacity: 0 }, "frame2+=2")

      tl.addLabel("frame3","+=2")
      .to(element.trustmark_logo, 1, { opacity: 0 }, "frame3")
      .to(element.sc_logo, 1, { opacity: 0 }, "frame3")
      .to(element.image_2, 2, { opacity: 0 }, "frame3")
      .to(element.headline, 1, { opacity: 0 }, "frame3")
      .to(element.subhead, 1, { opacity: 0 }, "frame3")
      .to(element.button, 1, { opacity: 0 }, "frame3")
      .to(element.image_3, 2, { opacity: 1 }, "frame3")
  }