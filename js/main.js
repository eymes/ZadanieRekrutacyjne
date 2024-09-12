const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".bars-btn");
const navLinks = document.querySelectorAll(".nav-mobile a");

function handleNav() {
	navMobile.classList.toggle("translate-x-0");
	navMobile.classList.toggle("translate-x-full");

	if (navMobile.classList.contains("translate-x-0")) {
		document.body.style.overflow = "hidden";
		navBtn.classList.add("bars-active");
	} else {
		document.body.style.overflow = "";
		navBtn.classList.remove("bars-active");
	}
}

function closeNav() {
	navMobile.classList.remove("translate-x-0");
	navMobile.classList.add("translate-x-full");
	document.body.style.overflow = "";
	navBtn.classList.remove("bars-active");
}

navBtn.addEventListener("click", handleNav);

navLinks.forEach(function (link) {
	link.addEventListener("click", closeNav);
});
