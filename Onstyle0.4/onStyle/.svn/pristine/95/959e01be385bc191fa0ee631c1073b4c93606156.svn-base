package net.su.admin.mem.service;

import java.util.List;

import javax.annotation.Resource;

import net.su.admin.mem.dao.AdminMemDAO;
import net.su.admin.mem.vo.AdminMemVO;

import org.springframework.stereotype.Service;

@Service
public class AdminMemServiceImpl implements AdminMemService{

	@Resource
	private AdminMemDAO adminMemDAO;
	
	public List<AdminMemVO> adminMemList(AdminMemVO adminMemVO) throws Exception{
		
		int adminMemListCount = adminMemDAO.adminMemListCount(adminMemVO);
		adminMemVO.setTotalRecordCount(adminMemListCount);
		List<AdminMemVO> adminMemList = adminMemDAO.adminMemList(adminMemVO);              
		return adminMemList;
	}
	
	public AdminMemVO adminMemRead(AdminMemVO adminMemVO)throws Exception{
		adminMemVO = adminMemDAO.adminMemRead(adminMemVO);
		return adminMemVO;
	}
}
