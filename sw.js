var cache1="c2";
this.addEventListener("install",function(event){
	event.waitUntil(
   caches.open(cache1).then(cache=>{
   	cache.addAll([
      "form.html",
      "resume.html",
      "form.css"
   		])
   })
   );
})
this.addEventListener("fetch",function(event){
	event.respondWith(
  caches.open(cache1).then(function(cache){
  	return cache.match(event.request).then(function(res){
  		return res || fetch(event.request).then(function(reqres){
  			cache.put(event.request,reqres.clone());
  		})
  	})
  })
		)
})