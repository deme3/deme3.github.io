let currentMode = 'light';
function setMode(newMode, force, persist) {
  if(typeof force === "undefined") force = false;
  if(typeof persist === "undefined") persist = true;
  if(currentMode === newMode && !force) return false;
  
  const ALLOWED = ["dark", "light"];
  if(!ALLOWED.includes(newMode)) return false;

  if(persist) {
    localStorage.setItem("theme", newMode);
    document.getElementById("match-system-settings").style.display = "";
  }
  
  let root = document.documentElement;
  let dmSwitch = document.getElementById("dark-mode-switch");
  root.classList.remove(...ALLOWED);
  if(newMode === "dark") {
    root.classList.add("dark");
    dmSwitch.innerText = "light mode";
  } else if(newMode === "light") {
    root.classList.add("light");
    dmSwitch.innerText = "dark mode";
  }
  
  currentMode = newMode;
  return true;
}

function toggleMode(e) {
  e.preventDefault();
  if(currentMode === 'light') setMode.bind(this)('dark');
  else setMode.bind(this)('light');
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("dark-mode-switch").addEventListener("click", toggleMode);
  document.getElementById("match-system-settings").addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.removeItem("theme");

    setMode(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark', true, false);
    this.style.display = "none";
  });
  let startingMode = 'light';
  
  if(window.matchMedia) {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    startingMode = mediaQuery.matches ? 'light' : 'dark';

    if(localStorage.getItem("theme") !== null) {
      startingMode = localStorage.getItem("theme");
      currentMode = startingMode;
    } else {
      document.getElementById("match-system-settings").style.display = "none";
    }

    mediaQuery.addEventListener("change", function(e) {
      if(e.matches) setMode('light', true, false);
      else setMode('dark', true, false);
    });
  }

  setMode(startingMode, true, false);
});