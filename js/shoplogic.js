var xhr = new XMLHttpRequest();
var output = document.querySelector('.contentColumn');
console.log(xhr);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        
        var package = JSON.parse(xhr.responseText);

        for(var i = 0; i < package.length; i++){
            var newHtml = `<li class='child'><div class="card text-dark mb-3 mt-3" style="max-width: 17.5rem;">
            <div class="card-header">
              <p class="m-0 float-left">${package[i].title}</p>
              <p class="m-0 float-right">${package[i].category}</p>
            </div>
            <div class="card-body">
              <div class="card-image"><img src="${package[i].image}" class="img-fluid" alt=""></div>
              <p class="mt-2 float-left pt-2 pl-3">${Math.floor(Math.random()*5 + 1)},${Math.floor(Math.random()*5 + 1)}0€</p>
              <a href='#' class="pt-3 float-right mr-3">Add to cart</a></li>
              
            </div>
          </div>`;

			output.innerHTML += newHtml;
        }
        // FILTER FUNCTION	



	const dropdown = document.getElementById('selector');
	dropdown.addEventListener('click', function(){
		var text = this.value;
		for(var i = 0; i < list.length; i++){
			if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {
				list[i].style.display = 'none';
			} else {
				list[i].style.display = 'inline-block';
			}
			
		  }
		});

	// SEARCH FUNCTION
		const input = document.getElementById('searchBar');
		var list = document.querySelectorAll('.child');
		
		input.addEventListener('keyup', function(){
			var text = this.value;
			
		  for(var i = 0; i < list.length; i++){
			  if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {
				list[i].style.display = 'none';
				
			} else {
				list[i].style.display = 'inline-block';
				
			}
		  }
		});
	}
}
xhr.open('GET', 'package.json');
xhr.send();
