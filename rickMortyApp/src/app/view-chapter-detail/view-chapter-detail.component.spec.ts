import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChapterDetailComponent } from './view-chapter-detail.component';

describe('ViewChapterDetailComponent', () => {
  let component: ViewChapterDetailComponent;
  let fixture: ComponentFixture<ViewChapterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChapterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChapterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
