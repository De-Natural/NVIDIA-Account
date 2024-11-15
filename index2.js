const buttons = document.querySelectorAll(".btn");
const enterInput = document.getElementById("enter");
console.log("is working");

  
console.log(enterInput);
buttons.forEach((button , ind,ink)=> {
    // console.log("buttons",ind,ink);
    button.addEventListener("click", () => {
        console.log("Button is clicked");
        enterInput.value = button.textContent;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectedOptionIcon = document.querySelector('#selected-option');
    const optionsContainer = document.querySelector('.options-container');
    const customSelect = document.querySelector('.custom-select');

    // Event listener for the icon to toggle the display of .options-container
    customSelect.addEventListener('click', function() {
        if (optionsContainer.style.display === 'block') {
            optionsContainer.style.display = 'none';
            selectedOptionIcon.style.rotate = '0deg';
        } else {
            optionsContainer.style.display = 'block';
            selectedOptionIcon.style.rotate = '180deg';
        }
    });

    // Event listeners for each button with the .opt class
    document.querySelectorAll('.opt').forEach(button => {
        button.addEventListener('click', function() {
            // Update the content of .custom-select to the selected option's content
            customSelect.innerHTML = this.innerHTML;
            
            // Re-attach the #selected-option icon after updating the content
            customSelect.appendChild(selectedOptionIcon);
            selectedOptionIcon.style.rotate = '0deg';

            // Hide the .options-container after selection
            optionsContainer.style.display = 'none';
            selectedOptionIcon.style.rotate = '0deg';
        });
    });
});

 