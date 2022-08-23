  //header

const links = document.querySelectorAll(".menu-right a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("a.current").classList.remove("current");
    link.classList.add("current");
  });
});



     //modal

 window.onload = function() {
            var modal = document.getElementById("modal-wrapper");

            var hireButton = document.getElementById("hire-talent-button");
            
            var hireButton2 = document.getElementById("hire-button");
             
            var hireButton3 = document.getElementById("hire-button-2");
              
            var modal2 = document.getElementById("modal-wrapper-2");
            
            var joinButton = document.getElementById("join-button");
            
            var joinButton2 = document.getElementById("join-button-2");

           hireButton.onclick = function() {
                modal.style.display = "block";
            }
           
           hireButton2.onclick = function() {
                modal.style.display = "block";
            }

           hireButton3.onclick = function() {
                modal.style.display = "block";
            }
            
            joinButton.onclick = function() {
                modal2.style.display = "block";
            }

           joinButton2.onclick = function() {
                modal2.style.display = "block";
            }

            window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
                };
            if (event.target == modal2) {
            modal2.style.display = "none";
                };
            };
}
         


