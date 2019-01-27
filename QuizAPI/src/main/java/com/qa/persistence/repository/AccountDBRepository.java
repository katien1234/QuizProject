package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;
import java.util.Collection;
import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import com.qa.persistence.domain.Account;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default

public class AccountDBRepository implements AccountRepository {
	
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	
	public String getAccount() {
		Query query = manager.createQuery("Select a FROM Account a");
		Collection<Account> accounts = (Collection<Account>) query.getResultList();
		return util.getJSONForObject(accounts);
		
	}
		
	@Transactional(REQUIRED)
	public String createAccount(String accoun) {
		Account anAccount = util.getObjectForJSON(accoun, Account.class);
		manager.persist(anAccount);
		return "{\"message\": \"Account has been sucessfully added\"}";
	}
	
	@Transactional(REQUIRED)
	public String deleteAccount(String email) {
		Account accountInDB = findAccount(email);
		if (accountInDB != null) {
			manager.remove(accountInDB);
		}
		return "{\"message\": \"Account sucessfully deleted\"}";
	}
	
	public String updateAccount(String email, String account) {
		Account theAccount = findAccount(email);
		manager.remove(theAccount);;
		Account anAccount = util.getObjectForJSON(account,  Account.class);
		manager.persist(anAccount);
		
		return null;
	}
	
	
	private Account findAccount(String email) {
		return manager.find(Account.class, email);
	}
	
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}
	
	
}