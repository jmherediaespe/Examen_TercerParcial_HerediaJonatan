import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorieManageComponent } from './subcategorie-manage.component';

describe('SubcategorieManageComponent', () => {
  let component: SubcategorieManageComponent;
  let fixture: ComponentFixture<SubcategorieManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategorieManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorieManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
