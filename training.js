// Accordion

const accordion = document.getElementsByClassName('accordion-container');

        for(i = 0; i < accordion.length; i++ ) {
            accordion[i].addEventListener('click', function() {
                this.classList.toggle('active')
            })
        }


window.onload = function() {

  // Modal

  var modal = document.getElementById("modal-wrapper");
  var btn1 = document.getElementById("modal-1");
  var btn2 = document.getElementById("modal-2");
  var btn3 = document.getElementById("modal-3");
  var btn4 = document.getElementById("modal-4");

  var span = document.getElementById("modal-close");

  btn1.onclick = function() {
    modal.style.display = "block";
  }

  btn2.onclick = function() {
    modal.style.display = "block";
  }

  btn3.onclick = function() {
    modal.style.display = "block";
  }

  btn4.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
