let cartCount = 0;

/* CART FUNCTION */
document.querySelectorAll(".cart-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        cartCount++;
        document.getElementById("cart-count").innerText = cartCount;

        // CHANGE BUTTON STYLE
        btn.innerText = "Added ✓";
        btn.style.background = "green";
        btn.disabled = true;

    });

});

/* SHOW / HIDE DETAILS */
document.querySelectorAll(".toggle-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const details = btn.previousElementSibling;

        if(details.style.display === "block"){
            details.style.display = "none";
            btn.innerText = "Show Details";
        } else {
            details.style.display = "block";
            btn.innerText = "Hide Details";
        }

    });

});

/* CONTACT FORM */
document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

    this.reset();
});