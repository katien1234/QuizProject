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

	public String deleteQuestion(Long id) {
		return repo.deleteQuestion(id);
	}

	public void setRepo(QuestionRepository repo) {
		this.repo = repo;
	}

	public String updateQuestion(Long id, String  question) {

		return repo.updateQuestion(id, question);

	}

	
	
}
