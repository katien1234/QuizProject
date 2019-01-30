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
import com.qa.persistence.domain.Question;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default

public class QuestionDBRepository implements QuestionRepository {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	
	public String getQuestion() {
		Query query = manager.createQuery("Select a FROM Question a");
		Collection<Question> questions = (Collection<Question>) query.getResultList();
		return util.getJSONForObject(questions);
		
	}
	
	@Transactional(REQUIRED)
	public String createQuestion(String quest) {
		Question anQuestion = util.getObjectForJSON(quest, Question.class);
		manager.persist(anQuestion);
		return "{\"message\": \"Question has been sucessfully added\"}";
	}

	@Transactional(REQUIRED)
	public String deleteQuestion(String question) {
		Question questionInDB = findQuestion(question);
		if (questionInDB != null) {
			manager.remove(questionInDB);
		}
		return "{\"message\": \"Question sucessfully deleted\"}";
	}
	
	public String updateQuestion(String question) {
		Question theQuestion = findQuestion(question);
		manager.remove(theQuestion);;
		Question anQuestion = util.getObjectForJSON(question,  Question.class);
		manager.persist(anQuestion);
		
		return "{\"message\": \"Question sucessfully updated\"}";
	}
	
	
	private Question findQuestion(String question) {
		return manager.find(Question.class, question);
	}
	
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}
	
	
}
