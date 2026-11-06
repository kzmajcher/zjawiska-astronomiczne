const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.setAttribute("data-theme", "light");
}

// Obsługa przycisku motywu
themeBtn.addEventListener("click", () => {
  if (document.body.getAttribute("data-theme") === "light") {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

//obsluga formularza
const alertForm = document.querySelector(".alert-form");

if (alertForm) {
  alertForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Dziękujemy! Powiadomienia zostały włączone dla Twojego adresu e-mail :)).",
    );

    alertForm.reset();
  });
}
