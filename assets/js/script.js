
let flipButton = document.getElementById("button-flip");
let clearButton = document.getElementById("button-clear");
let image = document.getElementById("coin");
let headRolls = 0
let tailRolls = 0 


    flipButton.addEventListener('click', () => {
    let heads = Math.random() < 0.5
    if (heads) {
        image.src = 'assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'

        headRolls += 1
    }
    else {
        image.src = 'assets/images/penny-tails.jpg'
        document.getElementById('message').textContent = 'You Flipped Tails!'

        tailRolls +=1
    }

     
     let total = headRolls + tailRolls;

     let tailPercent = 0
     let headPercent = 0
    
     if (total > 0) {

        headPercent = Math.round((headRolls / total) * 100)
        tailPercent = Math.round((tailRolls / total) * 100)
    }
     
     
     document.getElementById('heads').textContent = headRolls
     document.getElementById('heads-percent').textContent = headPercent + '%'
     document.getElementById('tails').textContent = tailRolls
     document.getElementById('tails-percent').textContent = tailPercent + '%'
 
    })

    
    clearButton.addEventListener('click', function() {
        headRolls = 0
        tailRolls = 0

        document.getElementById('message').textContent = 'Let\'s Get Rolling!';

        let total = headRolls + tailRolls;

     let tailPercent = 0
     let headPercent = 0
    
     if (total > 0) {

        headPercent = Math.round((headRolls / total) * 100)
        tailPercent = Math.round((tailRolls / total) * 100)
    }
     
     
        document.getElementById('heads').textContent = headRolls
        document.getElementById('heads-percent').textContent = headPercent + '%'
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('tails-percent').textContent = tailPercent + '%'
        })

// })