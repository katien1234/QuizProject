package com.qa.persistence.repository;

public interface QuestionRepository {

	String getQuestion();
	String createQuestion(String question);
	String deleteQuestion(Long id);
	String updateQuestion(Long id, String question);
	

}
