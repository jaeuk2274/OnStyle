package net.su.app.appCodi.service;

import javax.annotation.Resource;

import net.su.app.appCodi.dao.AppCodiReqstDAO;
import net.su.logger.Logger;

import org.springframework.stereotype.Service;

@Service
public class AppCodiReqstServiceImpl implements AppCodiReqstService{

	@Resource	
	AppCodiReqstDAO appCodiReqstDao;
	
}