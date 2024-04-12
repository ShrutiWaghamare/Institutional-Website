jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.
	


	gsap.from("#navbar-collapse ul li",{
		duration:1,
		y:25,
		stagger:0.2,
		opacity:0

	})
	gsap.from(".navbar-brand img",{
		duration:1,
		y:25,
		stagger:0.2,
		opacity:0

	})
	gsap.to(".topnav",{
		// backgroundColor:"#E4E4E4",
		duration:0.5,
		border:"1px solid black",
		scrollTrigger:{
			trigger:"#nav",
			scroller:"body",
			// markers:true,
			start:"top -10%",
			end:"top -20%",
			scrub:1
	
		}
	})
	})