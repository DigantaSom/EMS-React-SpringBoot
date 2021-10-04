package com.digantasom.ems.backend.controller;

import java.util.List;

import com.digantasom.ems.backend.model.Employee;
import com.digantasom.ems.backend.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@PostMapping("/")
	public Employee saveEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
}
