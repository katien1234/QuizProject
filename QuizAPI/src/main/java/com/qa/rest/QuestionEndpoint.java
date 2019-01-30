package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.business.service.QuestionService;

@Path("/question")
public class QuestionEndpoint {

	@Inject
	private QuestionService service;
	
	@Path("/getQuestion")
	@GET
	@Produces({ "application/json" })
	public String getQuestion() {
		return service.getQuestion();
	}
	

	@Path("/createQuestion")
	@POST
	@Produces({ "application/json" })
	public String addQuestion(String question) {
		return service.addQuestion(question);
	}
	

	@Path("/deleteQuestion/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteQuestion(@PathParam("id") String question) {
		return service.deleteQuestion(question);
	}
	
	@Path("/updateQuestion/{id}")
	@PUT
	@Produces({"application/json"})
	public String updateQuestion(@PathParam("id") String question) {
		return service.updateQuestion(question);
	}
	
	
	public void setService(QuestionService service) {
		this.service = service;
	}
}
