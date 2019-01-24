package com.qa.business.service;

import javax.inject.Inject;

import com.qa.persistence.repository.AccountRepository;

public class AccountServiceImpl implements AccountService {


	@Inject
	private AccountRepository repo;


	public String getAccount() {
		return repo.getAccount();
	}
	
	public String addAccount(String account) {
		return repo.createAccount(account);
	}

	public String deleteAccount(Long id) {
		return repo.deleteAccount(id);
	}

	public void setRepo(AccountRepository repo) {
		this.repo = repo;
	}

	public String updateAccount(Long id, String  account) {

		return repo.updateAccount(id, account);

	}

}
