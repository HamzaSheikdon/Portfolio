/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabsContenst = document.querySelectorAll('[data-content]')  

/*=============== DARK LIGHT THEME ===============*/
tabs.forEach( tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabsContenst.forEach(tc =>{ /* tc = tabsContenst */
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{ /* t = tab */
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== POPUP PASSWORD ===============*/
const correctPassword = "booster";

// Function to show the password prompt
function showPasswordPrompt() {
  const password = prompt("Enter the password:");

  if (password === correctPassword) {
    // Password is correct, allow access
    alert("Password is correct. Welcome!");
  } else {
    // Password is incorrect, show an error message
    alert("Incorrect password. Access denied.");
    // Reload the page to prevent unauthorized access
    location.reload();
  }
}

// Call the function to show the password prompt when the page loads
showPasswordPrompt();