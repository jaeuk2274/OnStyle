package net.su.consmr.mem.service;

import javax.annotation.Resource;

import net.su.common.security.Base64Utils;
import net.su.consmr.mem.dao.MemDAO;
import net.su.consmr.mem.vo.MemVO;

import org.springframework.stereotype.Service;

@Service
public class MemServiceImple implements MemService {

   @Resource
   MemDAO memDao;
   
   Base64Utils base64 = new Base64Utils();
   String encryptKey = "temp11111111111111111111";
   
   //패스워드 확인   
   public MemVO passCheck(MemVO memVO) throws Exception{
		//기본 pw
		String W_ORG_FG = memVO.getMem_pw();
		//암호화 pw
		String EN_ORG_FG = base64.encrypt(W_ORG_FG,encryptKey);
		memVO.setMem_pw(EN_ORG_FG);
		memVO = memDao.passCheck(memVO);
		return memVO;
   }
   //join정보 불러오기
	public MemVO joinDetail(MemVO memVO) throws Exception{
		memVO = memDao.joinDetail(memVO);
		return memVO;
	}
   
   //join화면정보 수정하기!
	public void upFinish(MemVO memVO) throws Exception{
		memDao.upFinish(memVO);
	}
}