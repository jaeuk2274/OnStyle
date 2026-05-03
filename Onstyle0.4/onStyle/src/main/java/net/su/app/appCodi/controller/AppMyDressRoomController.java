package net.su.app.appCodi.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import net.su.app.appCodi.service.AppMyDressRoomService;
import net.su.consmr.codi.vo.MyDressRoomVO;
import net.su.logger.Logger;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AppMyDressRoomController {
	@Resource
	AppMyDressRoomService appMyDressRoomService;
	
	//옷 조회
	
	@RequestMapping(value = "/appClothSelectList.do", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public List<MyDressRoomVO> clothSelect(Model model, MyDressRoomVO myDrsRmVO, HttpSession session) throws Exception {
		Logger.info("APP 옷 조회");
		myDrsRmVO.setMem_seq(5);
		Logger.info("APP 옷 조회11111111    "+myDrsRmVO.getBigGroup());
		Logger.info("APP 옷 조회22222222    "+myDrsRmVO.getCategory_seq());
		List<MyDressRoomVO> clothSelectList = appMyDressRoomService.clothSelectList(myDrsRmVO);
		Logger.info("켈룩켈룩켈룩켈룩");
		Logger.info("뭘까");
		return clothSelectList;
	}
}
