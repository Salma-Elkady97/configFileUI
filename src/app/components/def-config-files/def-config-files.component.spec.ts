import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefConfigFilesComponent } from './def-config-files.component';

describe('DefConfigFilesComponent', () => {
  let component: DefConfigFilesComponent;
  let fixture: ComponentFixture<DefConfigFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefConfigFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefConfigFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
