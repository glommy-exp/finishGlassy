		 var feedlink = document.querySelector(".call-btn"); 
		  var feedPopup = document.querySelector(".modal-feedback");
		  var feedclose = document.querySelector(".close-modal");
		  var closeOverlay = document.querySelector(".modal-overlay");


		  	feedlink.addEventListener("click", function (evt)
    { evt.preventDefault();
  feedPopup.classList.add("modal-showq");
  closeOverlay.classList.add("modal-showq");

		});
		  	feedclose.addEventListener("click", function (evt)
		    { evt.preventDefault();
		    feedPopup.classList.remove("modal-showq");
		    closeOverlay.classList.remove("modal-showq");
		 });
		  	 window.addEventListener("keydown", function (evt) {
		    if (evt.keyCode === 27) {
		      evt.preventDefault();

		      if (feedPopup.classList.contains("modal-showq")){
		        feedPopup.classList.remove("modal-showq");
		        closeOverlay.classList.remove("modal-showq");
		      }
		    }
		  });
