import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExchangerComponent } from './home-exchanger.component';

describe('HomeExchangerComponent', () => {
  let component: HomeExchangerComponent;
  let fixture: ComponentFixture<HomeExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExchangerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
