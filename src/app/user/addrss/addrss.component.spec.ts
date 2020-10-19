import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrssComponent } from './addrss.component';

describe('AddrssComponent', () => {
  let component: AddrssComponent;
  let fixture: ComponentFixture<AddrssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
