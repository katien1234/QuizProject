package com.qa.business.service;

public interface QuestionService {

	
	String getQuestion();
	String addQuestion(String question);
	String deleteQuestion(Long id);
	String updateQuestion(Long id, String question);
	
	
	
}
