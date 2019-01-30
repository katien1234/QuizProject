package com.qa.business.service;
import javax.inject.Inject;
import com.qa.persistence.repository.QuestionRepository;

public class QuestionServiceImpl implements QuestionService {

	@Inject
	private QuestionRepository repo;


	public String getQuestion() {
		return repo.getQuestion();
	}
	
	public String addQuestion(String question) {
		return repo.createQuestion(question);
	}

	public String deleteQuestion(String question) {
		return repo.deleteQuestion(question);
	}

	public void setRepo(QuestionRepository repo) {
		this.repo = repo;
	}

	public String updateQuestion(String  question) {

		return repo.updateQuestion(question);

	}

	
	
}
