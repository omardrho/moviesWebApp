import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMovieComponent } from './details-movie.component';

describe('DetailsMovieComponent', () => {
  let component: DetailsMovieComponent;
  let fixture: ComponentFixture<DetailsMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
