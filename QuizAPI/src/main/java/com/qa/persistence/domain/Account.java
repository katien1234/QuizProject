package com.qa.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Account {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private String email;
	private String username;
	private String password;
	private Long highscore;
	
	public Account() {

	}
	
	public Account(String email, String username, String password, Long highscore) {
		this.email = email;
		this.username = username;
		this.password = password;
		this.highscore = highscore;
	}

	public String getEmail() {
		return email;
	}
		
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getHighscore() {
		return highscore;
	}

	public void setHighscore(Long highscore) {
		this.highscore = highscore;
	}
	
}
