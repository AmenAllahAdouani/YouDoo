import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeekerComponent } from './home-seeker.component';

describe('HomeSeekerComponent', () => {
  let component: HomeSeekerComponent;
  let fixture: ComponentFixture<HomeSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSeekerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
