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
	public String deleteAccount(Long id) {
		Account accountInDB = findAccount(id);
		if (accountInDB != null) {
			manager.remove(accountInDB);
		}
		return "{\"message\": \"Account sucessfully deleted\"}";
	}
	
	public String updateAccount(Long id, String account) {
		Account theAccount = findAccount(id);
		manager.remove(theAccount);;
		Account anAccount = util.getObjectForJSON(account,  Account.class);
		manager.persist(anAccount);
		
		return null;
	}
	
	
	private Account findAccount(Long id) {
		return manager.find(Account.class, id);
	}
	
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}
	
	
}