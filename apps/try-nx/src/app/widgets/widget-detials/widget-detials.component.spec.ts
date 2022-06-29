import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetialsComponent } from './widget-detials.component';

describe('WidgetDetialsComponent', () => {
  let component: WidgetDetialsComponent;
  let fixture: ComponentFixture<WidgetDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetDetialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
