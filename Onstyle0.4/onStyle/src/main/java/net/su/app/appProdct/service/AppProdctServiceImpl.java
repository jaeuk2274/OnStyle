package net.su.app.appProdct.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.su.app.appCodi.service.AppCodiReqstService;
import net.su.app.appProdct.dao.AppProdctDAO;
import net.su.consmr.prodct.vo.ProdctVO;
import net.su.logger.Logger;

@Service
public class AppProdctServiceImpl implements AppCodiReqstService{

	@Resource	
	AppProdctDAO appProdctDao;

}
