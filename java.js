
$(document).ready(function(){

  function myFunction(x) {
    if (x.matches) { // If media query matches

    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.to(".overlay", {autoAlpha: "0", delay: 1, duration: 1.5 });
    tl.to(".col2", {autoAlpha: "0", duration: 0});
    tl.to(".col1", { x: "50%", duration: 1 }, '-=1');
    tl.to(".col1", { y: "0%", duration: 1 }, '-=1');
    tl.to(".col2", { y: "0%", duration: 1 }, '-=1');
    tl.to(".col2", { x: "-50%", duration: 1 }, '-=3');
    tl.to(".col2", {autoAlpha: "1", duration: 0});
    tl.to(".col1", { x: "0%", duration: 1 });
    tl.to(".col2", { x: "0%", duration: 1 }, '-=1');
    tl.from(".stick-holder", { autoAlpha: "0", duration: 0.4 }, '-=0.25');
    tl.to(".text", { y: "0%", duration: 1 }, '-=0.4');
    tl.to(".credito", {y: "0%", duration: 1 }, '-=0.8');
    tl.to(".stick-holder", {x: "0%", duration: 1 }, '-=0.8');
    tl.from(".creditspan", { opacity: "0", duration: 1 }, '-=0.8');
    // tl.to(".tab3", {x: "0%", duration: 0.5 }, '-=1.8');
    // tl.to(".tab2", {x: "0%", duration: 0.5 }, '-=1.6');
    // tl.to(".tab1", {x: "0%", duration: 0.5 }, '-=1.4');
} 
else {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.to(".overlay", {autoAlpha: "0", delay: 1, duration: 1.5 });
    tl.from(".tabspan0", { x: "-200%", duration: 1 }, '-=1.5');
    tl.from(".tabspan4", { x: "-200%", duration: 1 }, '-=1');
    tl.from(".tabspan3", { x: "-200%", duration: 1 }, '-=0.8');
    tl.from(".tabspan2", { x: "-200%", duration: 1 }, '-=0.8');
    tl.from(".tabspan1", { x: "-200%", duration: 1 }, '-=0.8');
    tl.to(".credito", {y: "-30%", duration: 0.75 }, '-=1');
    tl.to(".stick-holder", {x: "-20%", duration: 0.75 }, '-=0.8');
    tl.from(".creditspan", { opacity: "0", duration: 1 }, '-=0.8');
      // tl.to(".text", { y: "0%", duration: 0.75 });
  }
      }
      
      var x = window.matchMedia("(min-width: 850px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes




// MISC
$(".null").addClass("null-hide");

$(".tabspan0").click(function(){
  // REVEAL
  gsap.from(".credito", {y: "200%", duration: 1, ease: 'power3' });
  gsap.from(".stick-holder", {x: "-200%", duration: 1, ease: 'power3' });
  // HIDE
  gsap.to(".eventreveal", { duration: 1, y: '100%', ease: 'power3'})
  gsap.to(".text", { duration: 1, y: '100%', ease: 'power3'})
  gsap.to(".quotereveal", { duration: 1, y: '100%', ease: 'power3'})
  gsap.to(".aboutreveal", { duration: 1, y: '100%', ease: 'power3'});
    $(".col1").removeClass("last");
    $(".mobilehide").removeClass("mob-contents");
    $(".tabspan0").removeClass("tab0lower");
    $(".tab4").removeClass("first");
    $(".tab3").removeClass("first");
    $(".tab2").removeClass("first");
    $(".tab1").removeClass("first");
    $(".tabspan0").removeClass("tab-red");
    $(".tabspan0").removeClass("tab-white");
    $(".tabspan0").removeClass("tab-black");
    $(".tabspan0").removeClass("tab-blue");
    $(".tabspan1").removeClass("tab-red");
    $(".tabspan1").removeClass("tab-white");
    $(".tabspan1").removeClass("tab-black");
    $(".tabspan1").removeClass("tab-blue");
    $(".tabspan2").removeClass("tab-red");
    $(".tabspan2").removeClass("tab-white");
    $(".tabspan2").removeClass("tab-black");
    $(".tabspan2").removeClass("tab-blue");
    $(".tabspan3").removeClass("tab-red");
    $(".tabspan3").removeClass("tab-white");
    $(".tabspan3").removeClass("tab-black");
    $(".tabspan3").removeClass("tab-blue");
    $(".tabspan4").removeClass("tab-red");
    $(".tabspan4").removeClass("tab-white");
    $(".tabspan4").removeClass("tab-black");
    $(".tabspan4").removeClass("tab-blue");
    $(".gone").removeClass("death");
    $(".comingsoon").removeClass("death");
  })

    $(".tabspan4").click(function(){
      // REVEAL
      gsap.to(".text", { duration: 1, y: '0%', delay: 0.4, ease: 'power3'})
      // HIDE
      gsap.to(".eventreveal", { duration: 1, y: '100%', delay: 0.2, ease: 'power3'});
      gsap.to(".quotereveal", { duration: 1, y: '100%', ease: 'power3'});
      gsap.to(".aboutreveal", { duration: 1, y: '100%', ease: 'power3'});
      gsap.to(".upcoming", { duration: 1, x: '100%', ease: 'power3'})
      gsap.to(".past", { duration: 1, x: '100%', ease: 'power3'})
        $(".tab4").removeClass("bye");
        $(".tab3").removeClass("bye");
        $(".tab2").removeClass("bye");
        $(".tab1").removeClass("bye");
        $(".author-pic").removeClass("acts-of");
        $(".author-pic").removeClass("acts-of-2");
        $(".creditspan").removeClass("book-cred-2");
        $(".author-pic").removeClass("meegyung");
        $(".author-pic").removeClass("meeglive");
        $(".col1").addClass("last");
        $(".mobilehide").addClass("mob-contents");
        $(".tab4").addClass("first");
        $(".tab3").removeClass("first");
        $(".tab2").removeClass("first");
        $(".tab1").removeClass("first");
        $(".tabspan0").addClass("tab0lower");
        $(".author-name").removeClass("aurevoir");
        $(".null").addClass("null-hide");
        $(".null").removeClass("null-reveal");
        $(".creditspan").removeClass("meegcred");
        $(".comingsoon").removeClass("death");
        $(".gone").removeClass("death");
        $(".tabspan0").removeClass("tab-red");
        $(".tabspan0").addClass("tab-white");
        $(".tabspan0").removeClass("tab-black");
        $(".tabspan0").removeClass("tab-blue");
        $(".tabspan1").removeClass("tab-red");
        $(".tabspan1").addClass("tab-white");
        $(".tabspan1").removeClass("tab-black");
        $(".tabspan1").removeClass("tab-blue");
        $(".tabspan2").removeClass("tab-red");
        $(".tabspan2").addClass("tab-white");
        $(".tabspan2").removeClass("tab-black");
        $(".tabspan2").removeClass("tab-blue");
        $(".tabspan3").removeClass("tab-red");
        $(".tabspan3").addClass("tab-white");
        $(".tabspan3").removeClass("tab-black");
        $(".tabspan3").removeClass("tab-blue");
        $(".tabspan4").removeClass("tab-red");
        $(".tabspan4").addClass("tab-white");
        $(".tabspan4").removeClass("tab-black");
        $(".tabspan4").removeClass("tab-blue");
        $(".tab2").removeClass("tab-black");
        $(".gone").removeClass("death");
        $(".comingsoon").removeClass("death");
      })

    $(".tabspan3").click(function(){
      // REVEAL
      gsap.to(".text", { duration: 1, y: '100%', ease: 'power3'})
      gsap.from(".actsimg", { duration: 1, x: '-200%', ease: 'power3'});
      gsap.from(".usbook", { duration: 1, x: '-200%', delay: 0.1, ease: 'power3'});
      gsap.from(".barcodes", { duration: 1, x: '200%', delay: 0.1, ease: 'power3'});
      gsap.to(".quotereveal", { duration: 1, y: '0%', delay: 0.4, ease: 'power3'});
      // HIDES
      gsap.to(".eventreveal", { duration: 1, y: '100%', ease: 'power3'})
      gsap.to(".aboutreveal", { duration: 1, y: '100%', ease: 'power3'});
      gsap.to(".upcoming", { duration: 1, x: '100%', ease: 'power3'})
      gsap.to(".past", { duration: 1, x: '100%', ease: 'power3'})
        $(".tab4").addClass("bye");
        $(".author-pic").addClass("acts-of-2");
        $(".author-pic").removeClass("meegyung");
        $(".author-pic").removeClass("meeglive");
        $(".null").addClass("null-reveal");
        $(".null").removeClass("null-hide");
        $(".tab3").removeClass("bye");
        $(".tab2").removeClass("bye");
        $(".tab1").removeClass("bye");
        $(".creditspan").addClass("book-cred-2");
        $(".col1").addClass("last");
        $(".mobilehide").addClass("mob-contents");
        $(".tab4").removeClass("first");
        $(".tab3").addClass("first");
        $(".tab2").removeClass("first");
        $(".tab1").removeClass("first");
        $(".tabspan0").addClass("tab0lower");
        $(".author-name").addClass("aurevoir");
        $(".creditspan").removeClass("meegcred");
        $(".comingsoon").removeClass("death");
        $(".gone").removeClass("death");
        $(".tabspan0").addClass("tab-red");
        $(".tabspan0").removeClass("tab-white");
        $(".tabspan0").removeClass("tab-black");
        $(".tabspan0").removeClass("tab-blue");
        $(".tabspan1").addClass("tab-red");
        $(".tabspan1").removeClass("tab-white");
        $(".tabspan1").removeClass("tab-black");
        $(".tabspan1").removeClass("tab-blue");
        $(".tabspan2").addClass("tab-red");
        $(".tabspan2").removeClass("tab-white");
        $(".tabspan2").removeClass("tab-black");
        $(".tabspan2").removeClass("tab-blue");
        $(".tabspan3").addClass("tab-red");
        $(".tabspan3").removeClass("tab-white");
        $(".tabspan3").removeClass("tab-black");
        $(".tabspan3").removeClass("tab-blue");
        $(".tabspan4").addClass("tab-red");
        $(".tabspan4").removeClass("tab-white");
        $(".tabspan4").removeClass("tab-black");
        $(".tabspan4").removeClass("tab-blue");
        $(".tab2").removeClass("tab-black");
      })

      $(".tabspan2").click(function(){
            // REVEAL
      gsap.to(".eventreveal", { duration: 1, y: '0%', delay: 0.4, ease: 'power4'});
      gsap.to(".upcoming", { duration: 1, x: '0%', delay: 0.4, ease: 'power3'});
      gsap.to(".past", { duration: 1, x: '0%', delay: 0.2, ease: 'power3'});
      // HIDES
        gsap.to(".text", { duration: 1, y: '100%', ease: 'power3'})
        gsap.to(".quotereveal", { duration: 1, y: '100%', ease: 'power3'});
        gsap.to(".aboutreveal", { duration: 1, y: '100%', ease: 'power3'});
        $(".tab4").addClass("bye");
        $(".tab3").addClass("bye");
        $(".tab2").removeClass("bye");
        $(".tab1").removeClass("bye");
        $(".author-pic").removeClass("acts-of");
        $(".author-pic").removeClass("acts-of-2");
        $(".author-pic").removeClass("meegyung");
        $(".author-pic").addClass("meeglive");
        $(".creditspan").removeClass("book-cred-2");
        $(".col1").addClass("last");
        $(".mobilehide").addClass("mob-contents");
        $(".tab4").removeClass("first");
        $(".tab3").removeClass("first");
        $(".tab2").addClass("first");
        $(".tab1").removeClass("first");
        $(".tabspan0").addClass("tab0lower");
        $(".author-name").removeClass("aurevoir");
        $(".null").addClass("null-hide");
        $(".null").removeClass("null-reveal");
        $(".creditspan").removeClass("meegcred");
        $(".tabspan0").removeClass("tab-red");
        $(".tabspan0").removeClass("tab-white");
        $(".tabspan0").addClass("tab-black");
        $(".tabspan0").removeClass("tab-blue");
        $(".tabspan1").removeClass("tab-red");
        $(".tabspan1").removeClass("tab-white");
        $(".tabspan1").addClass("tab-black");
        $(".tabspan1").removeClass("tab-blue");
        $(".tabspan2").removeClass("tab-red");
        $(".tabspan2").removeClass("tab-white");
        $(".tabspan2").addClass("tab-black");
        $(".tabspan2").removeClass("tab-blue");
        $(".tabspan3").removeClass("tab-red");
        $(".tabspan3").removeClass("tab-white");
        $(".tabspan3").addClass("tab-black");
        $(".tabspan3").removeClass("tab-blue");
        $(".tabspan4").removeClass("tab-red");
        $(".tabspan4").removeClass("tab-white");
        $(".tabspan4").addClass("tab-black");
        $(".tabspan4").removeClass("tab-blue");
        $(".tab2").addClass("tab-page-black ");
        $(".gone").removeClass("death");
        $(".comingsoon").removeClass("death");
      })

      $(".tabspan1").click(function(){
        // REVEAL
        gsap.to(".aboutreveal", { duration: 1, y: '0%', delay: 0.4, ease: 'power3'});
        // HIDE
        gsap.to(".eventreveal", { duration: 1, y: '100%', delay: 0.2, ease: 'power3'})
        gsap.to(".text", { duration: 1, y: '100%', ease: 'power3'})
        gsap.to(".quotereveal", { duration: 1, y: '100%', ease: 'power3'});
      gsap.to(".upcoming", { duration: 1, x: '100%', ease: 'power3'});
      gsap.to(".past", { duration: 1, x: '100%', ease: 'power3'});
        $(".tab4").addClass("bye");
        $(".tab3").addClass("bye");
        $(".tab2").addClass("bye");
        $(".tab1").removeClass("bye");
        $(".author-pic").removeClass("acts-of");
        $(".author-pic").removeClass("acts-of-2");
        $(".author-pic").addClass("meegyung");
        $(".author-pic").removeClass("meeglive");
        $(".creditspan").removeClass("book-cred-2");
        $(".creditspan").addClass("meegcred");
        $(".col1").addClass("last");
        $(".mobilehide").addClass("mob-contents");
        $(".tab4").removeClass("first");
        $(".tab3").removeClass("first");
        $(".tab2").removeClass("first");
        $(".tab1").addClass("first");
        $(".tabspan0").addClass("tab0lower");
        $(".author-name").removeClass("aurevoir");
        $(".null").addClass("null-hide");
        $(".null").removeClass("null-reveal");
        $(".comingsoon").removeClass("death");
        $(".gone").removeClass("death");
        $(".tabspan0").removeClass("tab-red");
        $(".tabspan0").removeClass("tab-white");
        $(".tabspan0").removeClass("tab-black");
        $(".tabspan0").addClass("tab-blue");
        $(".tabspan1").removeClass("tab-red");
        $(".tabspan1").removeClass("tab-white");
        $(".tabspan1").removeClass("tab-black");
        $(".tabspan1").addClass("tab-blue");
        $(".tabspan2").removeClass("tab-red");
        $(".tabspan2").removeClass("tab-white");
        $(".tabspan2").removeClass("tab-black");
        $(".tabspan2").addClass("tab-blue");
        $(".tabspan3").removeClass("tab-red");
        $(".tabspan3").removeClass("tab-white");
        $(".tabspan3").removeClass("tab-black");
        $(".tabspan3").addClass("tab-blue");
        $(".tabspan4").removeClass("tab-red");
        $(".tabspan4").removeClass("tab-white");
        $(".tabspan4").removeClass("tab-black");
        $(".tabspan4").addClass("tab-blue");
        $(".tab2").removeClass("tab-black");
        $(".gone").removeClass("death");
        $(".comingsoon").removeClass("death");
      })


      $("button.accordion-no").click(function(){
        $(".tab4").addClass("bye");
       $(".tabspan4").addClass("tab-red");
        $(".tabspan3").addClass("tab-red");
        $(".tabspan2").addClass("tab-red");
        $(".tabspan1").addClass("tab-red");
        $(".tabspan0").addClass("tab-red");
        $(".tab4").removeClass("first");
        $(".tab3").addClass("first");
        $(".tab2").removeClass("first");
        $(".tab1").removeClass("first");
        gsap.from(".usbook", { duration: 1, x: '-200%', delay: 0.1, ease: 'power3'});
        gsap.from(".barcodes", { duration: 1, x: '200%', delay: 0.1, ease: 'power3'});
        gsap.to(".text", { duration: 1, y: '100%', ease: 'power3'})
      gsap.from(".actsimg", { duration: 1, x: '-200%', ease: 'power3'});
        gsap.to(".quotereveal", { duration: 1, y: '0%', delay: 0.2, ease: 'power3'})
      });

      $(".upcome").click(function(){
        $(".gone").addClass("death");
        $(".comingsoon").removeClass("death");
      });

      $(".pastel").click(function(){
        $(".gone").removeClass("death");
        $(".comingsoon").addClass("death");
      });

      $(".evento").click(function(){
        $(".gone").removeClass("death");
        $(".comingsoon").removeClass("death");
      });


      $("#book-hover").mouseover(function(){
        $(".author-pic").addClass("acts-of");
        $(".creditspan").addClass("book-cred");
    });

    $("#book-hover").mouseout(function(){
        $(".author-pic").removeClass("acts-of");
        $(".creditspan").removeClass("book-cred");
    });


    $("#book-hover").click(function(){
        $(".author-pic").addClass("acts-of-2");
        $(".creditspan").addClass("book-cred-2");
        $(".author-name").addClass("aurevoir");
        $(".null").addClass("null-reveal");
        $(".null").removeClass("null-hide");
      })

      $("#nytimes").mouseover(function(){
        $(".author-pic").addClass("beautiful");
        $(".creditspan").addClass("nyt-cred");
    });

    $("#nytimes").mouseout(function(){
        $(".author-pic").removeClass("beautiful");
        $(".creditspan").removeClass("nyt-cred");
    });

    $("#nytimes-2").mouseover(function(){
        $(".author-pic").addClass("hands");
        $(".creditspan").addClass("nyt-cred-2");
    });

    $("#nytimes-2").mouseout(function(){
        $(".author-pic").removeClass("hands");
        $(".creditspan").removeClass("nyt-cred-2");
    });

    $("#guardian").mouseover(function(){
        $(".author-pic").addClass("dropout");
        $(".creditspan").addClass("guardian-cred");
    });

    $("#guardian").mouseout(function(){
        $(".author-pic").removeClass("dropout");
        $(".creditspan").removeClass("guardian-cred");
    });

    $("#guardian-2").mouseover(function(){
        $(".author-pic").addClass("karl");
        $(".creditspan").addClass("guardian-cred-2");
    });

    $("#guardian-2").mouseout(function(){
        $(".author-pic").removeClass("karl");
        $(".creditspan").removeClass("guardian-cred-2");
    });

    $("#guardian-3").mouseover(function(){
        $(".author-pic").addClass("nolanclan");
        $(".creditspan").addClass("guardian-cred-3");
    });

    $("#guardian-3").mouseout(function(){
        $(".author-pic").removeClass("nolanclan");
        $(".creditspan").removeClass("guardian-cred-3");
    });

    $("#guardian-4").mouseover(function(){
        $(".author-pic").addClass("whitenoise");
        $(".creditspan").addClass("guardian-cred-4");
    });

    $("#guardian-4").mouseout(function(){
        $(".author-pic").removeClass("whitenoise");
        $(".creditspan").removeClass("guardian-cred-4");
    });

    $("#vice").mouseover(function(){
        $(".author-pic").addClass("waterford");
        $(".creditspan").addClass("vice-cred");
    });

    $("#vice").mouseout(function(){
        $(".author-pic").removeClass("waterford");
        $(".creditspan").removeClass("vice-cred");
    });

    $("#winter").mouseover(function(){
        $(".author-pic").addClass("eyes");
        $(".creditspan").addClass("winter-cred");
    });

    $("#winter").mouseout(function(){
        $(".author-pic").removeClass("eyes");
        $(".creditspan").removeClass("winter-cred");
    });

    $("#outline").mouseover(function(){
        $(".author-pic").addClass("chernobyl");
        $(".creditspan").addClass("outline-cred");
    });

    $("#outline").mouseout(function(){
        $(".author-pic").removeClass("chernobyl");
        $(".creditspan").removeClass("outline-cred");
    });

    $("#sundaytimes").mouseover(function(){
        $(".author-pic").addClass("anxiety");
        $(".creditspan").addClass("st-cred");
    });

    $("#sundaytimes").mouseout(function(){
        $(".author-pic").removeClass("anxiety");
        $(".creditspan").removeClass("st-cred");
    });

    $("#newstatesman").mouseover(function(){
        $(".author-pic").addClass("newstates");
        $(".creditspan").addClass("ns-cred");
    });

    $("#newstatesman").mouseout(function(){
        $(".author-pic").removeClass("newstates");
        $(".creditspan").removeClass("ns-cred");
    });

    $("#newstatesman-2").mouseover(function(){
        $(".author-pic").addClass("vigdis");
        $(".creditspan").addClass("ns-cred-2");
    });

    $("#newstatesman-2").mouseout(function(){
        $(".author-pic").removeClass("vigdis");
        $(".creditspan").removeClass("ns-cred-2");
    });

    $("#twr").mouseover(function(){
        $(".author-pic").addClass("quatro");
        $(".creditspan").addClass("quatro-cred");
    });

    $("#twr").mouseout(function(){
        $(".author-pic").removeClass("quatro");
        $(".creditspan").removeClass("quatro-cred");
    });

    $("#village").mouseover(function(){
        $(".author-pic").addClass("series");
        $(".creditspan").addClass("village-cred");
    });

    $("#village").mouseout(function(){
        $(".author-pic").removeClass("series");
        $(".creditspan").removeClass("village-cred");
    });




                        var acc = document.getElementsByClassName("accordion");
                        var i;
                              
                        // // Open the first accordion
                        // var firstAccordion = acc[0];
                        // var firstPanel = firstAccordion.nextElementSibling;
                        // firstAccordion.classList.add("active");
                        // firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
                      
                        // Add onclick listener to every accordion element
                        for (i = 0; i < acc.length; i++) {
                          acc[i].onclick = function() {
                            // For toggling purposes detect if the clicked section is already "active"
                            var isActive = this.classList.contains("active");
                      
                            // Close all accordions
                            var allAccordions = document.getElementsByClassName("accordion");
                            for (j = 0; j < allAccordions.length; j++) {
                              // Remove active class from section header
                              allAccordions[j].classList.remove("active");
                      
                              // Remove the max-height class from the panel to close it
                              var panel = allAccordions[j].nextElementSibling;
                              var maxHeightValue = getStyle(panel, "maxHeight");
                            
                            if (maxHeightValue !== "0px") {
                                panel.style.maxHeight = null;
                              }
                            }
                      
                            // Toggle the clicked section using a ternary operator
                            isActive ? this.classList.remove("active") : this.classList.add("active");
                      
                            // Toggle the panel element
                            var panel = this.nextElementSibling;
                            var maxHeightValue = getStyle(panel, "maxHeight");
                            
                            if (maxHeightValue !== "0px") {
                              panel.style.maxHeight = null;
                            } else {
                              panel.style.maxHeight = panel.scrollHeight + "px";
                            }
                          };
                        }
                        
                        // Cross-browser way to get the computed height of a certain element. Credit to @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
                        function getStyle(el, styleProp) {
                        var value, defaultView = (el.ownerDocument || document).defaultView;
                        // W3C standard way:
                        if (defaultView && defaultView.getComputedStyle) {
                          // sanitize property name to css notation
                          // (hypen separated words eg. font-Size)
                          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
                          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
                        } else if (el.currentStyle) { // IE
                          // sanitize property name to camelCase
                          styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
                            return letter.toUpperCase();
                          });
                          value = el.currentStyle[styleProp];
                          // convert other units to pixels on IE
                          if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
                            return (function(value) {
                              var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                              el.runtimeStyle.left = el.currentStyle.left;
                              el.style.left = value || 0;
                              value = el.style.pixelLeft + "px";
                              el.style.left = oldLeft;
                              el.runtimeStyle.left = oldRsLeft;
                              return value;
                            })(value);
                          }
                          return value;
                        }
                      }
                    });

                    