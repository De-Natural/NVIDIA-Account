const form = document.querySelector("form");
const Email = document.getElementById("email");
const emailBtn = document.getElementById("email_btn");
const article = document.querySelector("article");
const show = document.querySelector("#show_button");
const mediaBox = document.querySelector(".mediaBox");


const arrays = [
    {
        Image: '/Images/google.png',
        description: 'Log in with Google',
        link: 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Faccounts.nvgs.nvidia.com%2Fsys%2Fauthentication%2Fexternal%2Fredirect&state=eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiMTMwOTE0NjQ2OTg4OTIxMjQxNiIsImp0aSI6Ijk5YjI2YzczLTg5ZmYtNGEyNy04ZWM1LWI4Yzg4ZjA4NzE0ZCJ9.kbDhQh1V9GmftzBr6IDBijUndQQxRGyW6aPFndBlda8&client_id=155210405517-kbt47nvbj2s2gs29k1l4al4qeo8cqp7s.apps.googleusercontent.com&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow'
    },
    {
        Image: '/Images/discord-logo.png',
        description: 'Log in with discord',
        link: 'https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fscope%3Didentify%2520email%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Faccounts.nvgs.nvidia.com%252Fsys%252Fauthentication%252Fexternal%252Fredirect%26state%3DeyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiMTMwOTE0ODAzNDAyMzgxMzEyMCIsImp0aSI6ImIwZDJmNjA1LWVlZDktNGRhNy1hZjU2LWU4NjNkMjM1NDc3MiJ9.y-xahoeGjrUFRz9HIi9xL0mgo0VeOTR93n2q0fQH6a4%26client_id%3D915032111914827866'
    },
    {
        Image: '/Images/apple.png',
        description: 'Log in with Apple',
        link: 'https://appleid.apple.com/auth/authorize?scope=openid%20email&response_type=code%20id_token&redirect_uri=https%3A%2F%2Faccounts.nvgs.nvidia.com%2Fsys%2Fauthentication%2Fexternal%2Fredirect&state=%22eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiMTMwOTE0ODI0OTAxMTA5NzYwMCIsImp0aSI6IjU4MDlhM2M3LWYzZTQtNGJkZi1iN2M0LWMwN2E1ZWJiZGVhZiJ9.jGlXHfZCkd8dyTY4nNfTs9ut1FLiTdxGbUwM4ABsI84%22&client_id=com.nvidia.nvidm.login&response_mode=form_post'
    },
    {
        Image: '/Images/facebook.png',
        description: 'Log in with facebook',
        link: ''
    },
    {
        Image: '/Images/QQ.jpeg',
        description: 'Log in with QQ',
        link: ''
    },
    {
        Image: '/Images/weChat.png',
        description: 'Log in with weChat',
        link: ''
    }
]

mediaBox.innerHTML = arrays?.slice(0,3).map((data) => `
        <a href="${data?.link || '#'}">
            <div class="figure_div">
                <div class="spot">
                    <img src="${data?.Image}" alt="${data?.description}">
                </div>
                <p>${data?.description}</p>
            </div>
        </a>
    `).join('');

show.onclick = (e) => {
    e.preventDefault()
    if (show.textContent.toLowerCase() === "show more") {
        show.textContent = "Show Less";

        // Dynamically generate HTML using `arrays` data?
        mediaBox.innerHTML = arrays?.map((data) => `
            <a href="${data?.link || '#'}">
                <div class="figure_div">
                    <div class="spot">
                        <img src="${data?.Image}" alt="${data?.description}">
                    </div>
                    <p>${data?.description}</p>
                </div>
            </a>
        `).join(''); // Convert array to a single string
    } else {
        show.textContent = "Show More";

        // Clear the content when "Show More" is clicked
        mediaBox.innerHTML = arrays?.slice(0,3).map((data) => `
        <a href="${data?.link || '#'}">
            <div class="figure_div">
                <div class="spot">
                    <img src="${data?.Image}" alt="${data?.description}">
                </div>
                <p>${data?.description}</p>
            </div>
        </a>
    `).join('');
    }
};



Email.addEventListener("input", () => {
    // Remove any existing error message
    const existingError = form.querySelector("p.error");
    if (existingError) {
        existingError.remove();
    }

    const emailValue = Email.value;

    const hasGmail = emailValue.includes("@gmail.com");
    const hasNumber = /\d/.test(emailValue); 
    const isValidLength = emailValue.length >= 6;

    if (hasGmail && hasNumber && isValidLength) {
        // Enable the button and style it
        emailBtn.disabled = false;
        emailBtn.style.background = "blue";
        emailBtn.style.color = "white";
        emailBtn.style.cursor = "pointer";
    } else {
        emailBtn.disabled = true;

        const error = document.createElement("p");
        error.textContent = "Invalid email";
        error.classList.add("error");
        form.appendChild(error);
    }
});


emailBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove any existing error message
    const existingError = form.querySelector("p.error");
    if (existingError) {
        existingError.remove();
    }

    const emailValue = Email.value;
})

// show.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(article.style.display === "none"){
//         article.style.display = "flex"
//     }else{
//         article.style.display = "none"
//     }
// })
    

// conutry Section

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", 
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", 
    "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", 
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", 
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", 
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", 
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", 
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
    "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const countrySelect = document.getElementById("countries");

countries.forEach((country) => {
const option = document.createElement("option");
option.value = country.toLowerCase().replace(/\s+/g, "_");
option.textContent = country;
countrySelect.appendChild(option);
});