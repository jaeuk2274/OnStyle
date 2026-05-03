package net.su.app.appCodi.service;

import javax.annotation.Resource;

import net.su.app.appCodi.dao.AppCodiShrDAO;
import net.su.logger.Logger;

import org.springframework.stereotype.Service;

@Service
public class AppCodiShrServiceImpl implements AppCodiReqstService{

	@Resource	
	AppCodiShrDAO appCodiShrDao;
	
}