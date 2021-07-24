
indexImg = 0;

Diapositiva();

function Diapositiva(){

	var slider = document.querySelectorAll(".sli");

	for (var i = 0;  i < slider.length;  i++){
			
		   slider[i].style.display = "none"
	}

	indexImg++;

	if (indexImg > slider.length)  {indexImg = 1}

		slider[indexImg - 1].style.display = "block"

	setTimeout(Diapositiva, 3000);

}