/**
 * author : 정민기
 * see : 앱 시작화면
 */

$(document).ready(function(){
	//이미지 슬라이드 
	$('.bxslider').bxSlider();
	
	//상품 조회
//	var formData = "Y";
//	$.ajax({
//		url : "http://192.168.0.19:9029/appProdctFrameSelect.do",
//		type: "POST",
//		success : function(prodctList){
//			$.each(prodctList, function(i, vo){ 
//				$("#prodctList").append("<a href='#'>"
//											+ "<div id='prodct_seq"+vo.prodct_seq+"' style='width:31%; float:left; text-align:center; padding-top:3%; padding-left:2%;'>"
//												+ "<div style='height:150px;'>"
//													+ "<img style='width:100%; height:100%;' src='http://192.168.0.19:9029"+vo.prodct_img_route1+"'>"
//												+ "</div>"
//												+ "<div>"
//													+ "<font size=2;>"+vo.prodct_nme+"</font>"
//													+ "<br>"
//													+ "<font size=2;>"+vo.prodct_price+"</font>"
//												+ "</div>"
//											+ "</div>")
//										+ "</a>";
//			})
//		},
//		 error:function(xhr,status,error)
//			{ //ajax 오류인경우  
//			 alert("error");
//			 alert("error\nxhr : " + xhr + ", status : " + status + ", error : " + error);		 
//			}
//	})
	
});

function page_yam() {
	$.mobile.changePage("MyDressRoomVirtualCodi.html");
}