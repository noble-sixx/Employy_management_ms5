import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';



  class ActivatedRouteStub {
    private subject = new Subject();
  
    push(value) {
      this.subject.next(value);
    }
  
    get params() {
      return this.subject.asObservable();
    }
  }
  
  xdescribe('EmployeeDetailsComponent', () => {
    let fixture: ComponentFixture<EmployeeDetailsComponent>;
    let component: EmployeeDetailsComponent;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule, RouterTestingModule],
        declarations: [EmployeeDetailsComponent],
        providers: [
          EmployeesService,
          { provide: ActivatedRoute, useClass: ActivatedRouteStub }
        ]
      });
  
      fixture = TestBed.createComponent(EmployeeDetailsComponent);
      component = fixture.componentInstance;
    });
  
    it('should show Employee details for a particular Employee', () => {
      component.Employee = {
        id: 1,
        firstname: 'John',
        lastname: 'Reese',
        emailid: 'john@gmail.com'
      };
  
      fixture.detectChanges();
  
      const firstnameElement: HTMLElement = fixture.debugElement.query(
        By.css('.panel-title')
      ).nativeElement;
      const lastnameElement: HTMLElement = fixture.debugElement.query(
        By.css('#description')
      ).nativeElement;
      const emailidElement: HTMLElement = fixture.debugElement.query(
        By.css('#availability')
      ).nativeElement;
      
  
      expect(firstnameElement.innerText).toContain('John');
      expect(lastnameElement.innerText).toContain('Reese');
      expect(emailidElement.innerText).toContain('john@gmail.com');
      
    });
  
    it('should redirect the user to `Employee Form` component when Edit button is clicked', () => {
      const router = TestBed.get(Router);
      const spy = spyOn(router, 'navigate');
  
      component.id = 1;
  
      fixture.detectChanges();
  
      const button = fixture.debugElement.query(By.css('#edit'));
      button.triggerEventHandler('click', null);
  
      expect(spy).toHaveBeenCalledWith(['/Employees', component.id, 'edit']);
    });
  
    it('should navigate the user to the `Not Found` component when an invalid Employee id is passed', () => {
      const router = TestBed.get(Router);
      const spy = spyOn(router, 'navigate');
  
      fixture.detectChanges();
  
      const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
      route.push({ id: 'abc' });
  
      expect(spy).toHaveBeenCalledWith(['/not-found']);
    });
  });
