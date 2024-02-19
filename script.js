let cards = document.querySelectorAll(".card")
let StackArea = document.querySelector(".stack-div-main")

function rotateCards(){
    let angle = 0
    cards.forEach((card)=>{
        if (card.classList.contains("active")) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle = angle - 10;
        }
    })
}
rotateCards()

window.addEventListener("scroll", () => {
    // Get the proportion of the StackArea's top position relative to the window's inner height
    let proportion = StackArea.getBoundingClientRect().top / window.innerHeight;
  
    // Check if StackArea is at or above the top of the viewport (proportion <= 0)
    if (proportion <= 0) {
      // Calculate the index based on the proportion and the number of cards
      let n = cards.length;
      let index = Math.ceil((proportion * n) / 2);
      index = Math.abs(index) - 1;
  
      // Loop through each card
      for (let i = 0; i < n; i++) {
        // Add or remove the "active" class based on the index
        if (i <= index) {
          cards[i].classList.add("active");
        } else {
          cards[i].classList.remove("active");
        }
      }
  
      // Call the rotateCards function to apply transformations based on the "active" class
      rotateCards();
    }
  });


  function adjust() {
    // Get the current width of the window
    let windowWidth = window.innerWidth;
  
    // Find the element with the class "left"
    let left = document.querySelector(".left");
  
    // Remove the "left" element from its current position in the DOM
    left.remove();
  
    // Check the window width and reinsert the "left" element based on the condition
    if (windowWidth < 800) {
      // If the window width is less than 800 pixels, insert the "left" element before the stackArea
      StackArea.insertAdjacentElement("beforebegin", left);
    } else {
      // If the window width is 800 pixels or more, insert the "left" element after the stackArea
      StackArea.insertAdjacentElement("afterbegin", left);
    }
  }
  
  // Call the adjust function once to initialize the positioning
 //detect Resize

 window.addEventListener("resize",adjust)
  
  