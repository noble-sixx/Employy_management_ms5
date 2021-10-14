package net.javaguides.springboot.service;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import com.mindtree.employeemanagerapp.service.EmployeeService;


@RunWith(MockitoJUnitRunner.class)
public class EmployeeServiceImplTest {
	
	@InjectMocks
	EmployeeServiceImpl service = new EmployeeServiceImpl();

	@Mock
	EmployeeRepository employeeRepo;

	EmployeeService employee = new Employee();
	List<Employee> listEmp = new ArrayList<>();
	@Before
	public void setUp() throws ParseException {
		MockitoAnnotations.initMocks(this);
		employee.setFirstName("Sameen");
		employee.setLastName("Shaw");	
		employee.setEmailID("Sam@gmail.com");
		listEmp.add(employee);
	}
	
	@Test
	public void createEmployeeTest() {
		Mockito.when(employeeRepo.save(employee)).thenReturn(employee);
		assertNotNull(employee);
		assertNotNull(service.createEmployee(employee));
		assertEquals("tanmoy", service.createEmployee(employee).getFirstName());
	}

	@Test
	public void getAllEmployeeDetailsTest() {
		Mockito.when(employeeRepo.findAll()).thenReturn(listEmp);
		assertNotNull(listEmp);
		assertEquals(listEmp,service.getAllEmployeeDetails());
	}
}