package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;

import java.util.Collection;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.persistence.domain.Account;
import com.qa.persistence.domain.Quiz;
import com.qa.util.JSONUtil;

public class QuizDBRepository implements QuizRepository{

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	
	public String getQuiz() {
		Query query = manager.createQuery("Select a FROM Quiz a");
		Collection<Quiz> quizes = (Collection<Quiz>) query.getResultList();
		return util.getJSONForObject(quizes);
		
	}
		
	@Transactional(REQUIRED)
	public String createQuiz(String qui) {
		Quiz anQuiz = util.getObjectForJSON(qui, Quiz.class);
		manager.persist(anQuiz);
		return "{\"message\": \"Quiz has been sucessfully added\"}";
	}
	
	@Transactional(REQUIRED)
	public String deleteQuiz(String question) {
		Quiz quizInDB = findQuiz(question);
		if (quizInDB != null) {
			manager.remove(quizInDB);   
		}
		return "{\"message\": \"Quiz sucessfully deleted\"}";
	}
	
	@Transactional (REQUIRED)
	public String updateQuiz(String question, String quiz) {
		Quiz theQuiz = findQuiz(question);
		manager.remove(theQuiz);
		Quiz anQuiz = util.getObjectForJSON(quiz,  Quiz.class);
		manager.persist(anQuiz);
		
		return "{\"message\": \"Quiz sucessfully updated\"}";
	}
	
	
	
	private Quiz findQuiz(String question) {
		return manager.find(Quiz.class, question);
	}
	
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}
	
	
}