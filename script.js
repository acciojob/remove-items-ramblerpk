//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=>{
	let select = document.getElementById("colorSelect");
	let color = select.value;

	for(let i=0;i<select.options.length;i++){
		if(select.options[i].value===color){
			select.remove(i);
			break;
		}
		
	}
});