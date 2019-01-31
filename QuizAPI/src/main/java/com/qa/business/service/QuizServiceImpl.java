package com.qa.business.service;

import javax.inject.Inject;

import com.qa.persistence.repository.AccountRepository;
import com.qa.persistence.repository.QuizRepository;

public class QuizServiceImpl implements QuizService {


	@Inject
	private QuizRepository repo;


	public String getQuiz() {
		return repo.getQuiz();
	}
	
	public String getQuizByCat(String category) {
		return repo.getQuizByCat(category);
	}
	
	public String addQuiz(String quiz) {
		return repo.createQuiz(quiz);
	}

	public String deleteQuiz(String question) {
		return repo.deleteQuiz(question);
	}

	public void setRepo(QuizRepository repo) {
		this.repo = repo;
	}

	public String updateQuiz(String question, String  quiz) {

		return repo.updateQuiz(question, quiz);

	}

	
	
}
