//* When an image is clicked open a popup overlay
document.addEventListener("click", function(e) {
	console.log(e.target)
	if (e.target.tagName === "IMG") {
			const overlay = document.createElement("div");
			overlay.id = "image-overlay";
			overlay.style.position = "fixed";
			overlay.style.top = "0";
			overlay.style.left = "0";
			overlay.style.width = "100%";
			overlay.style.height = "100%";
			overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
			overlay.style.display = "flex";
			overlay.style.justifyContent = "center";
			overlay.style.alignItems = "center";
			overlay.style.zIndex = "1000";

			const popupImage = document.createElement("img");
			popupImage.src = e.target.src;
			popupImage.style.borderRadius = "8px";
			popupImage.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

			//* Max width without going off screen keep original aspect ratio
			popupImage.style.maxWidth = "100vw";
			popupImage.style.maxHeight = "100vh";
			popupImage.style.width = "auto";
			popupImage.style.height = "auto";

			overlay.appendChild(popupImage);
			document.body.appendChild(overlay);

			overlay.addEventListener("click", function() {
				if (document.getElementById("image-overlay")) {
					document.getElementById("image-overlay").remove();
				}
			});
			popupImage.addEventListener("click", function(e) {
				e.stopPropagation();
				if (document.getElementById("image-overlay")) {
					document.getElementById("image-overlay").remove();
				}
			});
		}
});