package net.su.admin.store.service;

import javax.annotation.Resource;

import net.su.admin.store.dao.AdminStoreDAO;

import org.springframework.stereotype.Service;

@Service
public class AdminStoreServiceImpl implements AdminStoreService{

	@Resource
	private AdminStoreDAO adminStoreDAO;
}
