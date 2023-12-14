import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPaddingComponent } from './default-padding.component';

describe('DefaultPaddingComponent', () => {
  let component: DefaultPaddingComponent;
  let fixture: ComponentFixture<DefaultPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
