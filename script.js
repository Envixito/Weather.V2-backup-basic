function darkmode() {
    var SetTheme = document.querySelector(".area");
    SetTheme.classList.toggle("dark-mode");
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
      console.log("Dark mode");
      theme = "DARK";
    } else {
      console.log("Light mode");
      theme = "LIGHT";
    }

    var x = document.getElementById("light");
    if (x.innerHTML === "dark_mode") {
      x.innerHTML = "light_mode";
    } else {
      x.innerHTML = "dark_mode";
    }

    var SetTheme = document.querySelector(".circles");
    SetTheme.classList.toggle("dark-mode");
    var theme2;
    if (SetTheme.classList.contains("dark-mode")) {
      console.log("Dark mode");
      theme2 = "DARK";
    } else {
      console.log("Light mode");
      theme2 = "LIGHT";
    }

    var SetTheme = document.querySelector(".material-symbols-outlined");
    SetTheme.classList.toggle("dark-mode");
    var theme3;
    if (SetTheme.classList.contains("dark-mode")) {
      console.log("Dark mode");
      theme3 = "DARK";
    } else {
      console.log("Light mode");
      theme3 = "LIGHT";
    }

    var SetTheme = document.querySelector(".mybtn");
    SetTheme.classList.toggle("dark-mode");
    var theme4;
    if (SetTheme.classList.contains("dark-mode")) {
      console.log("Dark mode");
      theme4 = "DARK";
    } else {
      console.log("Light mode");
      theme4 = "LIGHT";
    }
  }