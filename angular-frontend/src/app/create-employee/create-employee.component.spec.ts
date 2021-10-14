import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  describe('Employees factory', function() {
    var Employees;
    var EmployeeList = [
      {
        id: '1',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'Jane@gmail.com'
        
      },
      {
        id: '2',
        firstname: 'Bob',
        lastname: 'Ross',
        email: 'bob@gmail.com',
        
      },
      {
        id: '3',
        firstname: 'Steve',
        lastname: 'Jobs',
        email: 'jobs@gmail.com'
        
      },
      {
        id: '4',
        firstname: 'Billy',
        lastname: 'Bob',
        email: 'bill@gmail.com'
        
      }
    ];
    var singleEmployee = {
      id: '1',
      firstname: 'Jane',
        lastname: 'Doe',
        email: 'Jane@gmail.com'
      
    };
  
    beforeEach(angular.mock.module('api.Employees'));
  
    beforeEach(inject(function(_Employees_) {
      Employees = _Employees_;
    }));
  
    it('should exist', function() {
      expect(Employees).toBeDefined();
    });
  
    describe('.all()', function() {
      it('should exist', function() {
        expect(Employees.all).toBeDefined();
      });
  
      it('should return a hard-coded list of Employees', function() {
        expect(Employees.all()).toEqual(EmployeeList);
      });
    });
  
    describe('.findById()', function() {
      it('should exist', function() {
        expect(Employees.findById).toBeDefined();
      });
  
      it('should return one Employee object if it exists', function() {
        expect(Employees.findById('2')).toEqual(singleEmployee);
      });
  
      it('should return undefined if the Employee cannot be found', function() {
        expect(Employees.findById('ABC')).not.toBeDefined();
      });
    });
  })});