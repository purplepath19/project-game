class SlotMachine {
  constructor() {
    this.symbols = ["🍒", "🍇", "🍊", "🍋", "🍉", "🍓"];
    this.reels = document.querySelectorAll(".reel");
    
  }
  spinReel() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }



  spin() {


  }
}

const slotMachineInstance = new SlotMachine; 
const symbolsArray = slotMachineInstance.symbols;
console.log(symbolsArray);


//Brainstorm: 
// reel.textContent = randomSymbol;