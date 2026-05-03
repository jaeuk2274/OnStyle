<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>코디공유게시판</title>

<!-- consmrMenu css, js 링크 모아 놓은곳 -->
<%@ include file="/WEB-INF/include/include-header.jspf" %>   

<script>
function aring(ar){
	window.location.href="/codiShr.do?codi_shr_order="+ar;
}
function myCodi(seq){
	window.location.href="/codiShr.do?mem_seq="+seq;
}
</script>

</head>
<body>
   <div>
      <c:import url="/menu.do"/>
   </div>

   <!-- 본인 디자인은 여기 안에서 -->
   <div class="mainContainer" style="margin: 6% 12% 0% 12%;">
   
      <div class="container" style="width:100%;">
<!--       정렬 메뉴 -->
         <div class="col-lg-4" style="float:right;">
            <div class="bs-component" style="float:right;">
               <ul class="nav nav-tabs">
                  <li onclick="javascript:aring('s.codi_shr_regtime')"><a href="#home" data-toggle="tab">NEW</a></li>
                  <li onclick="javascript:aring('liked desc')"><a href="#profile" data-toggle="tab">HOT</a></li>
               </ul>
            </div>
         </div>

         <div class="col-md-8" style="height:15%; width:100%;">
            <h5><center>BEST CODI</center></h5>
         </div>
         <div class="row" style="height:500px;">
            <c:import url="/bestCodiShr.do"/>      
         </div>
         <div class="col-md-8" style="width:100%;">
            <h5><center>NEW</center></h5>
         </div>
         <div class="row" style="height:500px; margin-top:130px;">
            <c:import url="/codiShrList.do"/>       
         </div>
      </div>
      
   </div>

</body>
</html>