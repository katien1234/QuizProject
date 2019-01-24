package com.qa.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long questionId;
	private String question;
	private String answer;
	
	
	public Question() {

	}

	public Question(Long questionId, String question, String answer) {
		this.questionId = questionId;
		this.question = question;
		this.answer = answer; 
		
	}

	public Long getQuestionId() {
		return questionId;
	}
	
	public String getQuestion() {
		return question;
	}


	public void setQuestion(String question) {
		this.question = question;
	}


	public String getAnswer() {
		return answer;
	}


	public void setAnswer(String answer) {
		this.answer = answer;
	}
		
	
}
