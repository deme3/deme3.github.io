document.addEventListener("DOMContentLoaded", function() {
  let enlargeableImages = document.querySelectorAll("figure img");

  enlargeableImages.forEach((image) => {
    let figure = image.parentElement;
    figure.setAttribute("data-toggled", "no");
    figure.querySelector("figcaption").addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    figure.addEventListener("click", function() {
      let previouslyHidden = figure.getAttribute("data-toggled") === "no";
      figure.setAttribute("data-toggled", previouslyHidden ? "yes" : "no");

      let nowHidden = !previouslyHidden;

      if(nowHidden) {
        figure.removeChild(figure.querySelector(".popup-frame"));
      } else {
        let popupFrame = document.createElement("div");
        popupFrame.classList.add("popup-frame");

        let dummy = document.createElement("div");
        dummy.classList.add("dummy");

        let popupFigure = document.createElement("figure");

        let popupImage = document.createElement("img");
        let imageRect = image.getBoundingClientRect();
        popupImage.src = image.src;
        popupImage.style.transformOrigin = `${imageRect.x}px ${imageRect.y + imageRect.height / 2}px`;
        popupImage.classList.add("popup");

        let popupCaption = document.createElement("figcaption");
        popupCaption.innerText = figure.querySelector("figcaption").innerText;
        
        popupFigure.append(popupImage, popupCaption);
        popupFrame.append(dummy, popupFigure);
        figure.append(popupFrame);

        setTimeout(() => popupFrame.classList.add("shown"), 1);
      }
    });
  });
});