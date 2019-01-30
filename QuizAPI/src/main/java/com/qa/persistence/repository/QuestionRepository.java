package com.qa.persistence.repository;

public interface QuestionRepository {

	String getQuestion();
	String createQuestion(String question);
	String deleteQuestion(String question);
	String updateQuestion(String question);
	

}
