/**
 * 
 */
$(document).on('pageshow', function (event, data) {
	if ($.mobile.activePage.attr('id') === "virtualCodi") {
		
		$("input[name=bigGroup]").val("myCloth");	//대분류 초기값(나의 옷 or 미스봄상품)
		$("input[name=myCategory]").val(1);
		$("input[name=prodctCategory]").val(1);
		$("#myCloth").attr("class", "ui-btn-active ui-btn ui-shadow ui-corner-all");
		$("#1").attr("class", "ui-btn-active ui-btn ui-shadow ui-corner-all");
		
		clothSelectList(1);
	}
});

function setBigGroup(bigGroup){
	var myCategory = $("input[name=myCategory]").val();
	var prodctCategory = $("input[name=prodctCategory]").val();
	$("input[name=bigGroup]").val(bigGroup);
	
	if(bigGroup=="myCloth"){
		$("#"+prodctCategory).attr('class', 'ui-btn');
		$("#myCloth").attr("class", "ui-btn-active ui-btn ui-shadow ui-corner-all");
		$("#prodct").attr("class", "ui-btn");
		
		clothSelectList(myCategory);
	}else{
		$("#"+myCategory).attr('class', 'ui-btn');
		$("#prodct").attr("class", "ui-btn-active ui-btn ui-shadow ui-corner-all");
		$("#myCloth").attr("class", "ui-btn");
		
		clothSelectList(prodctCategory);
	}
}

function clothSelectList(category){
	var bigGroup = $("input[name=bigGroup]").val();
	var PreCategory;
	if(bigGroup=="myCloth"){
		PreCategory = $("input[name=myCategory]").val();
		$("#"+PreCategory).attr('class', 'ui-btn');
		$("#"+category).attr('class', 'ui-btn-active ui-btn ui-shadow ui-corner-all');
		$("input[name=myCategory]").val(category);
	}else{
		PreCategory = $("input[name=prodctCategory]").val();
		$("#"+PreCategory).attr('class', 'ui-btn');
		$("#"+category).attr('class', 'ui-btn-active ui-btn ui-shadow ui-corner-all');
		$("input[name=prodctCategory]").val(category);
	}
	formData = "category_seq="+category+"&bigGroup="+bigGroup;	
	$.ajax({
		type : "POST",
		data : formData,
		url:"http://192.168.0.19:9029/appClothSelectList.do",
		success:function(data){
			alert("111");
			if(bigGroup=="myCloth"){
				$.each(data, function(i, vo){
					var myCloth_seq = vo.myCloth_seq;
					var myCloth_img_route = vo.myCloth_img_route;
					var mem_seq = vo.mem_seq;
					var category_nme = vo.category_nme;
						$("#clothSelect").append(""
								+"<div style='float:left; width:77px; height:77px; margin-top:3%; margin-left:4%; text-align:center'>"
								+"<img src='http://192.168.0.19:9029"+myCloth_img_route+"' onclick='javascript:create_id_code(this.src, "+myCloth_seq+")' style='max-width:100%; max-height:100%'>"
								+"</div>");
				});
			} else {
				$.each(data, function(i, vo){
					var prodct_seq = vo.prodct_seq;
					var prodct_nme = vo.prodct_nme;
					var prodct_price = vo.prodct_price;
					var prodct_img_route1 = vo.prodct_img_route1;
						$("#clothSelect").append(""
								+"<div style='float:left; width:77px; height:77px; margin-top:3%; margin-left:4%; text-align:center'>"
								+"<img src='http://192.168.0.19:9029"+prodct_img_route1+"' onclick='javascript:create_id_code(this.src, "+prodct_seq+")' style='max-width:100%; max-height:100%'>"
								+"</div>");
				});
			}
		},
		error:function(request,status,error){
	        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});	
}
function create_id_code(img_src, cloth_seq){
	var bigGroup=$("input[name=bigGroup]").val();	//나의옷인지 미스봄상품인지 구별하기 위함
	var bigCode = bigGroup.substring(0,1)
	var id_code = bigCode+cloth_seq;
	
	img_click(img_src, cloth_seq, id_code);
}

//상품 리스트에서 상품 클릭시 캔버스에 상품 생성 
var idCheck = new Array();
function img_click(img_src, cloth_seq, id_code){
	var cloth_id = "cloth_id"+id_code;
	
	//중복선택 막기 위한 조건
	for(i=0;i<idCheck.length;i++){
		if (idCheck[i]==cloth_id){
			alert("이미 선택된 옷입니다");
			return false;
		}
	}
	
	idCheck.push(cloth_id);		//중복선택을 막기위해 선택한 옷 배열에 추가
	
	$('#canvas').append(""
			+"<img id='"+cloth_id+"' src='"+img_src+"' style='width:100px; position:absolute; overflow:hidden;'>"
			+"");		
	
	canvas_in_product(cloth_id, cloth_seq, img_src);		
}

var index = 0;				//배열 index
var canvas_img_seq = [];	//옷 seq
var canvas_img_src = [];	//옷 이미지 경로
// 캔버스 안에서 상품 이동
function canvas_in_product(id, seq, img_src){
	
	canvas_img_seq[index] = id.substring(8);
	canvas_img_src[index] = img_src;
	index++
	var o = $("#"+id);
	 var sx, sy, dx, dy, ix, iy;
	 var dragging = false;
	
	 $("#"+id).on('click', function(e) {	
		 event.stopPropagation();
		 
//		  item_info_display_on(id, seq);
	  });
	 
	  $("#"+id).on('vmousedown', function(e) {	 
		e.preventDefault();
		sx = e.pageX; //문서의 왼쪽 가장자리를 기준으로 마우스 위치의 X좌표(넓이) 값.
		sy = e.pageY; //문서의 왼쪽 가장자리를 기준으로 마우스 위치의 Y좌표(높이) 값.
		ix = $(o).offset().left; //Documet를 기준으로 한 엘리먼트의 위치 값
		iy = $(o).offset().top;  //Documet를 기준으로 한 엘리먼트의 위치 값
		dx=dy=0;
		dragging = true;

		console.log("vmousedown - s:",sx,sy,"/i:",ix,iy);
	 }).on('vmousemove', function(e) {
		if(dragging) {
	  	 $(o).css('position','absolute');
	  	 $(o).css('overflow','hidden');
	  	 $(o).css('z-index','1');
	  	 
		  dx = e.pageX - sx;
		  dy = e.pageY - sy;
		 
		  $(o).offset({left: ix + dx, top: iy + dy});
		}
	 }).on('vmouseup', function(e){
		dx = e.pageX - sx;
		dy = e.pageY - sy;
		
		dragging = false;
		$(o).css('position','absolute');
		$(o).css('overflow','hidden');
		$(o).css('z-index','0');
		$(o).offset({left: ix + dx, top: iy + dy});
		console.log("vmouseup - d:",dx,dy,"/i:",ix,iy);						
	 }); 
	  
}
