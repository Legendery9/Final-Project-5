function initializeGallery() {
  const images = document.querySelectorAll("#gallery img");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    // Tabindex for accessibility
    img.setAttribute("tabindex", "0");

    // Mouse and keyboard interaction events
    img.addEventListener("mouseover", () => {
      img.style.borderColor = "green";
      console.log("mouseover triggered");
    });

    img.addEventListener("mouseleave", () => {
      img.style.borderColor = "#999";
      console.log("mouseleave triggered");
    });

    img.addEventListener("focus", () => {
      img.style.borderColor = "blue";
      console.log("focus triggered");
    });

    img.addEventListener("blur", () => {
      img.style.borderColor = "#999";
      console.log("blur triggered");
    });
  }

  console.log("Gallery loaded and interactive.");
}

// onload
window.onload = initializeGallery;
