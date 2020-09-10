self.addEventListener("install", e =>{
	e.waitUntil(
		caches.open("cheick").then(cache => {
			return cache.addAll(["/","css/style.css", "images/rwa.png"]);
		})
	);
});
