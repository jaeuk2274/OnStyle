package net.su.admin.store.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.su.logger.Logger;
import net.su.admin.store.service.AdminStoreService;

@Controller
public class AdminStoreController {
	@Resource
	private AdminStoreService adminStoreService;

	@RequestMapping(value = "/adminStore.do", method = RequestMethod.GET)
	public String adminStore(Model model) {
		Logger.info("관리자 매장관리 홈");
		
		return "adminView/store/storeHome";
	}
}
