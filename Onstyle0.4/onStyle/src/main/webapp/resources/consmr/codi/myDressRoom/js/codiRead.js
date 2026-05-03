function deleteCodi(){	
	var wheather = confirm("코디를 삭제하시겠습니까?");
	if(wheather==true){
		var codiReadFrm = $("#codiReadFrm").serialize();
		window.location.href = "/deleteCodi.do?"+codiReadFrm+"&location=1";
	} else{
		return;
	}
}

function shareCodi(){
	var wheather = confirm("코디를 공유하시겠습니까?");
	if(wheather==true){
		var codiReadFrm = $("#codiReadFrm").serialize();
		window.location.href = "/shrCodi.do?"+codiReadFrm+"&location=1";
	} else{
		return;
	}
}

function prodct_read(prodct_seq){
	window.location.href = "/prodctFrameSelect.do?prodct_seq="+prodct_seq;
}

function back(){
	var codiReadFrm = $("#codiReadFrm").serialize();
	window.location.href = "/codiSet.do?"+codiReadFrm;
}
