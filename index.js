const buttons = document.querySelectorAll(".btn");
const enterInput = document.getElementById("enter");



console.log(enterInput);
buttons.forEach((button , ind,ink)=> {
    // console.log("buttons",ind,ink);
    button.addEventListener("click", () => {
        console.log("Button is clicked");
        enterInput.value = button.textContent;
    });
});


document.querySelector('#selected-option').style.rotate = '0deg';

document.querySelector('.custom-select').addEventListener('click', function() {
   if( document.querySelector('.options-container').style.display === 'block'){
    document.querySelector('.options-container').style.display = 'none';
    document.querySelector('#selected-option').style.rotate = '0deg';
   }
   else{
    document.querySelector('.options-container').style.display = 'block';
    document.querySelector('#selected-option').style.rotate = '180deg';
   }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.custom-select').innerHTML = this.innerHTML;
        document.querySelector('.options-container').style.display = 'none';
    });
});

// const array = [
//     {
//         bg: "/Images/binance-removebg-preview.png",
//         pT: "Binance"
//     },
//     {
//         bg: "/Images/bitcoin-removebg-preview.png",
//         pT: "Bitcoin"
//     },
//     {
//         bg: "/Images/Ethereum-removebg-preview.png",
//         pT: "Ethereum"
//     },
//     {
//         bg: "/Images/solana-removebg-preview.png",
//         pT: "Solana"
//     },
//     {
//         bg: "/Images/USD_coin-removebg-preview.png",
//         pT: "USD coin"
//     }
// ]

// document.addEventListener('DOMContentLoaded', function() {
//     const downIcon = document.getElementById('fly');
//     const inputDiv = document.getElementById('input');
//     const dropdownItems = document.querySelectorAll('.dropdown-item');
//     const selectedText = document.getElementById('selected-text');

//     downIcon.addEventListener('click', function() {
//         console.log('Dropdown icon clicked');
//         inputDiv.classList.toggle('active');
//         console.log('Active class toggled:', inputDiv.classList.contains('active'));
//     });

//     dropdownItems.forEach(function(item) {
//         item.addEventListener('click', function(e) {
//             console.log('Dropdown item clicked: ', this.textContent);
//             e.preventDefault();
//             selectedText.textContent = this.textContent;
//             inputDiv.classList.remove('active');
//             console.log('Dropdown closed');
//         });
//     });
// });
